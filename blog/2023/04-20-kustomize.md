---

title: kustomize + helm
author: hwchiu
tags:
  - kustomize
  - ArgoCD

---


Kustomize 可以支援使用 Helm 來強化整個靈活性
以下是一個使用 Helm Chart 的範例

```bash=
$ cat kustomization.yaml
helmCharts:
- name: redis-cluster
  includeCRDs: false
  valuesFile: redis.yaml
  releaseName: redis-cluster
  namespace: dev
  version: 9.0.5
  repo: https://charts.bitnami.com/bitnami
```

準備一個名為 redis.yaml 的檔案，就如同平常使用 helm values 一樣

接下來可以使用 kustomize 來嘗試產生最後部署的 YAML

```bash
$ kustomize build --enable-helm  > temp
$ ls -l w
-rw-r--r--  1 hwchiu  momo  123257 Oct 11 11:18 temp
```

想嘗試使用 `kubectl` 但是目前都會失敗

```bash
$ kubectl apply --dry-run=client -o yaml -k .
error: trouble configuring builtin HelmChartInflationGenerator with config: `
name: redis-cluster
namespace: dev
releaseName: redis-cluster
repo: https://charts.bitnami.com/bitnami
valuesFile: redis.yaml
version: 9.0.5
`: must specify --enable-helm
$ kubectl apply --dry-run=client -o yaml -k . --enable-helm
error: unknown flag: --enable-helm
See 'kubectl apply --help' for usage.
```

另外如果要於 ArgoCD 中使用，需要修改 argocd-cm 加入下列參數

```

apiVersion: v1
kind: ConfigMap
metadata:
  name: argocd-cm
data:
  kustomize.buildOptions: --enable-helm
```


