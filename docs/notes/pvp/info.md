---
title: PVP
createTime: 2024/10/18 20:35:08
permalink: /notes/pvp/
---
# PVP

目前为高版本1.9+PVP机制。<br>
服务器允许除主城以外的区域自由 PVP。<br>

当玩家PvP标记另一位玩家后退出，仍会受到被击杀惩罚。<br>
被玩家攻击或攻击玩家后会进入 PVP 管理状态，状态期间将会禁用所有指令。<br>

新建城镇/国家默认开启PVP，**不需要PVP需要您自行取消**：<br>
创建城镇后使用/t toggle pvp off<br>
创建国家后/n toggle pvp off<br>

## PvP裁决

Sw引入了PVP的裁决系统，只在玩家PVP时触发。<br>

### 头颅掉落

玩家PVP时有概率掉落角色头颅。<br>
<img src="/images/skull.png" alt="skull">

### 死亡裁决

玩家PVP死亡时，有概率掉落[5格]以内的背包物品[盔甲、武器除外]。<br>

## 悬赏系统

“有钱能使鬼推磨”,SW引入了玩家悬赏系统。<br>
你可以支付一定金额悬赏某个玩家，或者叠加某个玩家的悬赏金直到他被击杀。<br>

| 命令       | 作用     |
|----------|--------|
| /of page | 查看悬赏列表 |
| /of <玩家名称> <金额> | 发出一份悬赏 |
| /of add <玩家> <金额> | 叠加某位玩家的悬赏金额 |