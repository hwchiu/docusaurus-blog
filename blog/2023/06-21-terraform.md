--
title: terraform 小筆記
author: hwchiu
tags:
  - terraform
--


當使用支援 Lock 的遠端 Backend 時，每次執行 Terraform 操作都會嘗試去 Lock，並且指令結束後去釋放 Lock
若執行到一半就透過 CTRL+C 強制離開可能會導致 Lock 沒有辦法順利結束，這時候下次執行就會遇到下列的問題

```bash
$ terraform apply
Acquiring state lock. This may take a few moments...
╷
│ Error: Error acquiring the state lock
│
│ Error message: writing "gs://xxxxx/xxxxxxx/default.tflock" failed: googleapi: Error 412: At least one of the pre-conditions you specified did not hold., conditionNotMet
│ Lock Info:
│   ID:        1696991555387294
│   Path:      gs://xxxxx/xxxxxxx/default.tflock
│   Operation: OperationTypeApply
│   Who:       your_name@hostname.local
│   Version:   1.5.6
│   Created:   2022-10-11 02:32:35.12734 +0000 UTC
│   Info:
│
│ Terraform acquires a state lock to protect the state from being written
│ by multiple users at the same time. Please resolve the issue above and try
│ again. For most commands, you can disable locking with the "-lock=false"
│ flag, but this is not recommended.
```

當然上述原因也有可能是同時間真的有人其他人正在運行指令，把 lock 搶走，所以要先釐清 lock 卡住的情況是否如預期
如果是不預期的，就需要執行下列指令手動移除 lock

以上面輸出的 ID 當作內容，透過 `terraform force-unlock` 來解除

```bash
$ terraform force-unlock 1696991555387294
Do you really want to force-unlock?
  Terraform will remove the lock on the remote state.
  This will allow local Terraform commands to modify this state, even though it
  may still be in use. Only 'yes' will be accepted to confirm.

  Enter a value: yes
```

如果需要調整 Terraform State 的內容的話，通常可以使用
1. terraform state list
2. terraform state rm xxxx

手動將不需要的內容從 state 中移除

但是如果今天有更強硬的要求需要手動去修改內容的話，則需要
1. terraform state pull > old_state
2. vim a 
3. terraform state push old_state

這招很危險，要 100% 清楚自己做什麼同時也要有備份的 state 檔案，大意就是把 state 檔案抓下來並且直接修改，然後強行寫入回去，完全不需要額外 terraform plan/apply 的介入。
通常是 migration 過程希望可以順利轉移，同時又不希望遠方資源被影響，就可能會採用這種機制來直接修改 state.

此外轉移過程中如果有 provider 要處理，也可以透過使用 `terraform state replace-provider` 的方式來轉移，如下範例
```bash
terraform state replace-provider "registry.terraform.io/-/aws" "hashicorp/aws"
```