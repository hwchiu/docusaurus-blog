---
title: Spark SQL, ThriftServer, GCS in Kubernetes.
keywords: [Kubernetes,Network,Linux,Ubuntu]
date: 2023-09-23 22:04:29
tags:
  - Kubernetes
  - Spark
  - GCP
description: 紀錄如何於 K8s 上安裝 Spark SQL/ThriftServer 並且操作 GCS 上的資料
---


本篇文章記錄如何於 Kubernetes 安裝 Spark SQL 與 Spark Thrift Server，並且使用 GCS 作為 Spark SQL 來源，最後透過 JDBC 相容的應用程式與之溝通之來運行 Spark SQL.

文章並不會針對 Spark SQL, Thrift Server 等有過多琢磨，單純紀錄使用之指令與檔案。


# 架構

本文的目的架構如下，

1. 以 GKE 為基礎當作 Kubernetes 平台
2. 於 GKE 中部署 Spark Thrift Server
3. 欲查詢之資料存放於 GCS 中
4. 透過 Beeline CLI 或其他 JDBC 相容之工具與 Spark Thrift Server 溝通並且執行 SQL 相關語法。
5. Spark Thrift 收到請求產生對應的 Spark Executor，並從 GCS 中讀取相關資料並回應。


整個架構如下圖所述

![](./assets/Bk5TEXjJ6.png)

接下來就針對圖中每個元件記錄一下實際上的設定



## GCS

為了 Spark 可以有權限存取 GCS 上的資料，我們必須要創建一組 Service Account 並且給予對應的權限

此外由於 Spark 目前並不支援 Workload Identity 的方式，因此該 Service Account 必須要創建一組基於 Json 格式的 credential.json，然後將該檔案掛載到 Kubernetes 內讓 Spark Executor 可以透過其來與 GCS 互動。

流程為
1. 創建一個 Service Account
2. 賦予該 Service Account 一個 IAM Role 來讀寫 GCS
3. 產生一個對應的 Credential Key
4. 將該 Credential 給寫入到 Kubernetes 內

流程對應指令如下

```bash=
$ gcloud iam service-accounts --project my-project create spark-example --description="For Spark To Access GCS" --display-name=spark-example
$ gcloud projects add-iam-policy-binding my-project --member="serviceAccount:spark-example@my-project.iam.gserviceaccount.com" --role="roles/storage.admin"
$ gcloud iam service-accounts --project my-project keys create spark_test.json --iam-account=spark-example@my-project.iam.gserviceaccount.com
$ kubectl create secret generic gcs-sa --from-file=gcp-credentials.json=spark_test.json
```

執行完畢後，環境中就會有一跟名為 **gcs-sa** 的 Kubernetes secret，之後部署 Spark 的時候必須要將該掛載到環境中並且告知使用 **gcp-credentials.json**。



## Spark 

由於 Spark Server 需要動態創建 Spark Executor(Pod) ，因此本身需要 Kubernetes 的 Service Account 來獲得權限

以下 YAML 基於 RBAC 的規則準備好相關權限，並且賦予到名為 "spark" 的 Service Account 上
```yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  name: spark-server
rules:
- apiGroups: [""]
  resources: ["pods", "persistentvolumeclaims", "configmaps", "services"]
  verbs: ["get", "deletecollection", "create", "list", "watch", "delete"]
---
apiVersion: v1
kind: ServiceAccount
metadata:
  name: spark
---
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  name: spark-rolebinding
subjects:
- kind: ServiceAccount
  name: spark
  namespace: dev
roleRef:
  kind: Role
  name: spark-server
  apiGroup: rbac.authorization.k8s.io
```

一切準備就緒後，接下來就是準備一個 statefulset 來部署 Spark Thrift Server
首先， Spark 的官方 Image 中目前沒有包含可以跟 GCS 溝通用的 Connector，因此我們必需要額外安裝 [Google Cloud Storage Connector for Spark ](https://github.com/GoogleCloudDataproc/hadoop-connectors/tree/master/gcs) 到環境中

這邊有兩個做法
1. 重新建置 Spark Image，將相關檔案直接包含到 Image 內
2. 採用 Init Container 的方式下載該檔案，並且透過 Volume 的方式共享給主要的 Spark Container，並且放到 /opt/spark/jars 的資料夾內讓 Thrift Server 啟動時可以一併初始化

這邊採取 (2) 的方式來示範抓取 [hadoop3-2.2.16-shared.jar](https://github.com/GoogleCloudDataproc/hadoop-connectors/releases)
```yaml=
initContainers:
- name: download-file
  image: busybox
  command: ["sh", "-c", "if [ ! -e /tmp/gcs-connector-hadoop3-2.2.16-shaded.jar ]; then wget -O /tmp/gcs-connector-hadoop3-2.2.16-shaded.jar https://github.com/GoogleCloudDataproc/hadoop-connectors/releases/download/v2.2.16/gcs-connector-hadoop3-2.2.16-shaded.jar; fi"] 
  volumeMounts:
    - name: data-volume
      mountPath: /tmp
volumes:
- name: data-volume
  emptyDir: {}       
containers:
- name: thrift-server
  image: apache/spark:3.4.0
  volumeMounts:
    - name: data-volume
      mountPath: /app/data
  command:
    - 'bash'
    - '-c'
    - >-
      cp /app/data/gcs-connector-hadoop3-2.2.16-shaded.jar /opt/spark/jars/ &&
      /opt/spark/sbin/start-thriftserver.sh  
      --jars /app/data/gcs-connector-hadoop3-2.2.16-shaded.jar
      --packages com.google.cloud.bigdataoss:gcs-connector:hadoop3-2.2.16,org.apache.spark:spark-hadoop-cloud_2.12:3.4.0      
```

此做法的缺點就是效率比較低，但是彈性高，如果有版本需求更動時只需要改動 YAML 即可，不需要每次重新建置 Container Image。

接下來還要把前述提到的 Service Account 以及 GCS 的相關權限也帶入到環境中

```yaml=
serviceAccountName: spark
volumes:
- secret:
    secretName: gcs-sa  
  name: gcs-sa
containers:
- name: thrift-server
  image: apache/spark:3.4.0
  volumeMounts:
    - name: gcs-sa
      mountPath: /etc/secrets
      readOnly: true      
  command:
      --conf spark.hadoop.fs.gs.impl=com.google.cloud.hadoop.fs.gcs.GoogleHadoopFileSystem
      --conf spark.hadoop.google.cloud.auth.service.account.enable=true
      --conf spark.hadoop.fs.gs.project.id=my-project
      --conf spark.hadoop.google.cloud.auth.service.account.json.keyfile=/etc/secrets/gcp-credentials.json      
```

再來處理 hive server 相關的設定，本範例部署採用的是本地 hive metastore 的部署，因此會使用 Kubernetes PVC 來存放 hive 的資料。

```yaml=
volumeClaimTemplates:
- metadata:
  name: spark-data
  spec:
    accessModes: [ "ReadWriteOnce" ]
    resources:
      requests:
        storage: 100Gi
containers:
- name: thrift-server
  image: apache/spark:3.4.0
  volumeMounts:
    - name: gcs-sa
      mountPath: /etc/secrets
      readOnly: true
    - name: spark-data
      mountPath: /opt/spark/work-dir      
  command:
      --hiveconf hive.server2.thrift.port=10000
      --hiveconf hive.server2.thrift.bind.port=0.0.0.0
      --conf spark.kubernetes.driver.ownPersistentVolumeClaim=true
      --conf spark.kubernetes.driver.reusePersistentVolumeClaim=true      

```

最後就是微調一些跟 Kubernetes 有關的參數，詳細設定都可以參閱 [Running Spark on Kubernetes](https://spark.apache.org/docs/latest/running-on-kubernetes.html)

```yaml=
apiVersion: v1
kind: Service
metadata:
  name: spark-thrift-service
spec:
  clusterIP: None
  selector:
    app: spark-thrift-server
  ports:
    - name: thrift-server-port
      protocol: TCP
      port: 10000
      targetPort: 10000
    - protocol: TCP
      name: spark-driver-port
      port: 7078
      targetPort: 7078
    - protocol: TCP
      name: spark-ui-port
      port: 4040
      targetPort: 4040      
---     
containers:
- name: thrift-server
  image: apache/spark:3.4.0
  command:
      --master k8s://https://kubernetes.default.svc.cluster.local:443
      --conf spark.dynamicAllocation.enabled=true
      --conf spark.kubernetes.container.image=apache/spark:v3.4.0
      --conf spark.kubernetes.driver.pod.name=spark-thrift-server-0
      --conf spark.kubernetes.executor.request.cores="500m"
      --conf spark.kubernetes.executor.request.memory="1g"
      --conf spark.kubernetes.executor.secrets.gcs-sa=/etc/secrets
      --conf spark.kubernetes.namespace=dev
      --conf spark.driver.host=spark-thrift-service
      --conf spark.driver.bindAddress=spark-thrift-server-0
      --conf spark.driver.port=7078
      && tail -f /opt/spark/logs/spark--org.apache.spark.sql.hive.thriftserver.HiveThriftServer2-1-spark-thrift-server-0.out
```

上述的設定包含
1. 告知 Kubernetes API Server 的位置
2. Executor 會將 **gcs-sa** secret 給掛載到環境中的 **/etc/secrets** 內
3. 準備一個 Service 來提供網路服務供未來其他應用程式存取
4. 使用 dev namespace
5. thrift-server 預設會把 log 寫出來到檔案，因此透過 tail 的方式轉出來

最後全部整理起來可以得到下列的 YAML 檔案

```yaml=
apiVersion: v1
kind: Service
metadata:
  name: spark-thrift-service
spec:
  clusterIP: None
  selector:
    app: spark-thrift-server
  ports:
    - name: thrift-server-port
      protocol: TCP
      port: 10000
      targetPort: 10000
    - protocol: TCP
      name: spark-driver-port
      port: 7078
      targetPort: 7078
---     
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: spark-thrift-server
spec:
  serviceName: spark-thrift-service
  replicas: 1
  selector:
    matchLabels:
      app: spark-thrift-server
  volumeClaimTemplates:
  - metadata:
      name: spark-data
    spec:
      accessModes: [ "ReadWriteOnce" ]
      resources:
        requests:
          storage: 100Gi
  template:
    metadata:
      labels:
        app: spark-thrift-server
    spec:
      serviceAccountName: spark
      initContainers:
        - name: download-file
          image: busybox
          command: ["sh", "-c", "if [ ! -e /tmp/gcs-connector-hadoop3-2.2.16-shaded.jar ]; then wget -O /tmp/gcs-connector-hadoop3-2.2.16-shaded.jar https://github.com/GoogleCloudDataproc/hadoop-connectors/releases/download/v2.2.16/gcs-connector-hadoop3-2.2.16-shaded.jar; fi"]
          volumeMounts:
            - name: data-volume
              mountPath: /tmp
      volumes:
        - secret:
            secretName: gcs-sa
          name: gcs-sa
        - name: data-volume
          emptyDir: {}
      containers:
        - name: thrift-server
          image: apache/spark:3.4.0
          volumeMounts:
            - name: gcs-sa
              mountPath: /etc/secrets
              readOnly: true
            - name: data-volume
              mountPath: /app/data
            - name: spark-data
              mountPath: /opt/spark/work-dir
          command:
            - 'bash'
            - '-c'
            - >-
              cp /app/data/gcs-connector-hadoop3-2.2.16-shaded.jar /opt/spark/jars/ &&
              /opt/spark/sbin/start-thriftserver.sh
              --master k8s://https://kubernetes.default.svc.cluster.local:443
              --jars /app/data/gcs-connector-hadoop3-2.2.16-shaded.jar
              --packages com.google.cloud.bigdataoss:gcs-connector:hadoop3-2.2.16,org.apache.spark:spark-hadoop-cloud_2.12:3.4.0
              --hiveconf hive.server2.thrift.port=10000
              --hiveconf hive.server2.thrift.bind.port=0.0.0.0
              --conf spark.dynamicAllocation.enabled=true
              --conf spark.kubernetes.container.image=apache/spark:v3.4.0
              --conf spark.kubernetes.driver.pod.name=spark-thrift-server-0
              --conf spark.kubernetes.driver.ownPersistentVolumeClaim=true
              --conf spark.kubernetes.driver.reusePersistentVolumeClaim=true
              --conf spark.kubernetes.executor.request.cores="500m"
              --conf spark.kubernetes.executor.request.memory="1g"
              --conf spark.kubernetes.executor.secrets.gcs-sa=/etc/secrets
              --conf spark.kubernetes.namespace=dev
              --conf spark.driver.host=spark-thrift-service
              --conf spark.driver.bindAddress=spark-thrift-server-0
              --conf spark.driver.port=7078
              --conf spark.hadoop.fs.gs.impl=com.google.cloud.hadoop.fs.gcs.GoogleHadoopFileSystem
              --conf spark.hadoop.google.cloud.auth.service.account.enable=true
              --conf spark.hadoop.fs.gs.project.id=my-project
              --conf spark.hadoop.google.cloud.auth.service.account.json.keyfile=/etc/secrets/gcp-credentials.json
              && tail -f /opt/spark/logs/spark--org.apache.spark.sql.hive.thriftserver.HiveThriftServer2-1-spark-thrift-server-0.out
```

將上述檔案部署到環境內後，可以觀察部署的情況

```bash=
$ kubectl -n dev logs -f spark-thrift-server-0
...
23/09/23 01:58:13 INFO AbstractService: Service:ThriftBinaryCLIService is started.
23/09/23 01:58:13 INFO ThriftCLIService: Starting ThriftBinaryCLIService on port 10000 with 5...500 worker threads
23/09/23 01:58:13 INFO AbstractService: Service:HiveServer2 is started.
23/09/23 01:58:13 INFO HiveThriftServer2: HiveThriftServer2 started
...
```

出現 **HiveThriftServe2** 就代表一切部署完畢，接下來就來進行環境驗證

# Verify

為了驗證存取，我們先創建一個 GCS 來存放資料
```bash=
gcloud storage buckets create gs://hungwei_spark_test
```

由於接下來要透過 Spark SQL 的語法操作，所以資料本身必須包含
1. database/table
2. scheme 
3. data kc port-forward -n dev --address 0.0.0.0 svc/spark-thrift-service 10000:10000

因此 GCS 上的資料存取可以分成兩種類型
1. 創建全新的 table 與 data
2. 存取已經存在的資料

以下使用 beeline CLI 來示範兩種情境
先透過 kubectl port-forward 創立 Tunnel 並且來存取

```
$ kubectl port-forward -n dev --address 0.0.0.0 svc/spark-thrift-service 10000:10000
```
接者透過 beeline 來連線(也可以使用 dbeaver)

```
$ ./beeline -u jdbc:hive2://localhost:10000
```
此外由於前述安裝時有特別設定 `spark.dynamicAllocation.enabled=true`，因此每次執行都會動態產生 Pod 來運行，所以第一次執行指令都會比較花費時間

## Case 1

接下來的示範流程為
1. 使用 gcs 內的資料夾來創建一個 database，並且設定相關 sceheme
2. 寫入資料
3. 讀取資料

其中創建 table 的時候要特別加上 `OPTIONS (path 'gs://$bucket_name/$folder')` 來使用

```bash=
0: jdbc:hive2://localhost:10000> CREATE TABLE test (id int, name string) OPTIONS (path 'gs://hungwei_spark_test/case1');    
0: jdbc:hive2://localhost:10000> INSERT INTO TABLE test VALUES (1234, 'test');
0: jdbc:hive2://localhost:10000> INSERT INTO TABLE test VALUES (2345, 'test2');
0: jdbc:hive2://localhost:10000> INSERT INTO TABLE test VALUES (1234, 'test3');
0: jdbc:hive2://localhost:10000> INSERT INTO TABLE test VALUES (1234, 'test3');
0: jdbc:hive2://localhost:10000> INSERT INTO TABLE test VALUES (5678, 'test3');
0: jdbc:hive2://localhost:10000> select * from test where name="test3";
+-------+--------+
|  id   |  name  |
+-------+--------+
| 5678  | test3  |
| 1234  | test3  |
| 1234  | test3  |
+-------+--------+
3 rows selected (3.415 seconds)
```

上述指令的執行過程可以觀察到相關的 Pod 被創立
```bash=
thrift-jdbc-odbc-server-7e310a8abfc209d1-exec-7   1/1     Running             0             1s
thrift-jdbc-odbc-server-7e310a8abfc209d1-exec-6   0/1     Completed           0             5m28s
thrift-jdbc-odbc-server-7e310a8abfc209d1-exec-6   0/1     Terminating         0             5m28s
thrift-jdbc-odbc-server-7e310a8abfc209d1-exec-6   0/1     Terminating         0             5m30s
thrift-jdbc-odbc-server-7e310a8abfc209d1-exec-6   0/1     Terminating         0             5m30s
thrift-jdbc-odbc-server-7e310a8abfc209d1-exec-6   0/1     Terminating         0             5m30s
thrift-jdbc-odbc-server-7e310a8abfc209d1-exec-7   0/1     Completed           0             65s
thrift-jdbc-odbc-server-7e310a8abfc209d1-exec-7   0/1     Terminating         0             65s
thrift-jdbc-odbc-server-7e310a8abfc209d1-exec-7   0/1     Terminating         0             67s
thrift-jdbc-odbc-server-7e310a8abfc209d1-exec-7   0/1     Terminating         0             67s
thrift-jdbc-odbc-server-7e310a8abfc209d1-exec-7   0/1     Terminating         0             67s
```

觀察 GCS 內的狀態，可以看到有些許檔案被創建來描述資料
```
$ gsutil list gs://hungwei_spark_test/case1
gs://hungwei_spark_test/case1/
gs://hungwei_spark_test/case1/part-00000-26846a09-e18e-4d38-8b2a-c7c005e2c7e8-c000
gs://hungwei_spark_test/case1/part-00000-29411642-fd0b-4c1c-bcad-fe6f77adef53-c000
gs://hungwei_spark_test/case1/part-00000-34bc8daf-3944-4156-8ff9-f8d2839f6a9f-c000
gs://hungwei_spark_test/case1/part-00000-7ca852d0-97e1-4c06-a3e1-e329c1bfebde-c000
gs://hungwei_spark_test/case1/part-00000-8a105d8b-f314-4763-ba5e-d82ff00506bf-c000
```

透過相同的 port-forward 方式去存取 4040 port，就可觀察到 Spark UI

![](./assets/rJUnkVnkp.png)


## Case 2

第二個範例我們要存取一個事先存在的資料，因此會先透過 gsutil 的工具將資料上傳到 bucket 內的 case2 資料夾，總共有三個檔案
每個檔案的內容都是一樣的格式，為 int, string 的格式，範例如下
```
...
287, 341feba68a7c515288ba
288, 7db6394632c5ee7c2bc3
289, 5c2fb14de85ac40013bc
290, 831596bd2c3051aa128e
291, 673c62da4b7b0eee8efd
292, 46107b341ed115c03ac2
293, 140fde027a05d316fa95
294, ba0760ff44610f797ad0
...
```

先透過 gsutil 上傳到 case2 資料夾內
```
$ gsutil cp data*   gs://hungwei_spark_test/case2/
Copying file://data1 [Content-Type=application/octet-stream]...
Copying file://data2 [Content-Type=application/octet-stream]...
Copying file://data3 [Content-Type=application/octet-stream]...
| [3 files][  2.9 MiB/  2.9 MiB]
Operation completed over 3 objects/2.9 MiB.

$ gsutil ls   gs://hungwei_spark_test/case2/
gs://hungwei_spark_test/case2/data1
gs://hungwei_spark_test/case2/data2
gs://hungwei_spark_test/case2/data3
```

檔案準備就緒後就回到 beeline CLI 的介面，這時候要透過 `EXTERNAL TABLE` 搭配其他變數來描述該檔案格式，範例如下


```bash=
0: jdbc:hive2://localhost:10000> CREATE EXTERNAL TABLE case2 (id int, name string) row format delimited fields terminated by ',' stored as textfile OPTIONS (path 'gs://hungwei_spark_test/case2');  
0: jdbc:hive2://localhost:10000> select * from case2;
....
| 111291  |  3b8b2b1eca0561d4ab62  |
| 111292  |  01a20fc8e8f91984e447  |
| 111293  |  ecf8d25c0ed6f8576f96  |
| 111294  |  558f78477c1b2151f6e9  |
| 111295  |  b5ae29bda237add37650  |
| 111296  |  ea2caeabbf3559a6cdea  |
| 111297  |  0d56273274b4012f690f  |
| 111298  |  20a25f019018272013fd  |
+-------+------------------------+
|  id   |          name          |
+-------+------------------------+
| 111299  |  dead09f62d571453339e  |
| 111300  |  3ab89d041368f1717543  |
+-------+------------------------+
106,902 rows selected (51.873 seconds)
0: jdbc:hive2://localhost:10000> select count(*) from case2;
+-----------+
| count(1)  |
+-----------+
| 106902    |
+-----------+
1 row selected (42.869 seconds)
```

# Summary

1. Spark 原生不支持 GCS，需要安裝相關 Connector
2. Spark 不支援 Workload Identity，需要創建 Service Account，設定好權限並且創建相關的 Key
3. Spark 於 Kubernetes 上有眾多參數可以微調

