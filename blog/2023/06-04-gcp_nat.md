---
title: GCP NAT 相關筆記
author: hwchiu
tags:
  - GCP
  - Network
---


GCP 的世界中透過 Cloud NAT 來處理對外流量，由該 NAT GW 進行 SNAT 的轉換。
之前遇到一個問題是某對外服務的連線會不定時 timeout 無法連線，輾轉各種測試最後終於發現問題出在 Cloud NAT 上

Cloud NAT 上有一個設定稱為 [Port Reservation](https://cloud.google.com/nat/docs/ports-and-addresses#port-reservation-procedure)
該設定會影響 Cloud NAT 要如何幫後方所有流量進行 SNAT，要用哪個 Source IP 以及哪個 Source Port 去處理。

其中有一個設定是 "Minimum Ports per VM"，這個欄位的意思是每個 VM 上可以對相同目標 (IP + Port) 同時發起多少條連線
舉例來說，假設今天想要連接 1.2.3.4:2345 這個網站，且設定為 32，那就代表這個 VM 上最多只能有 32 條連線，超過的就會被 Cloud NAT 丟掉而無法處理，最後產生 timeout

如果今天 VM 規格夠大，上面部署 GKE 同時有多個相同副本的 Pod 同時運行，那就有可能會踩到這個數字導致連線 timeout，可以到 Cloud NAT 的設定將其調整，預設應該是 64。


另外 Cloud NAT 本身對外流量都會收費，要計算流量資訊需要到 VPC 去打開 Logging 紀錄，這個 Logging 也需要特別設定取樣頻率，因為會收費
所以設定完成後，就可以於 Cloud Logging 收到相關資訊，可以把 Logging 轉換為 Metrics 去計算流量的走向，譬如以 IP/hostname 為基準去分析到底流量都跑去那，再透過這個資訊來除錯省錢
