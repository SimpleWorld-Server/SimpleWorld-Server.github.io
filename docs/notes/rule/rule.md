---
title: 规则
createTime: 2024/10/18 20:33:11
permalink: /notes/rule/
---
## SW币

SimpleWorld的游戏货币，玩家间经济流通的基础货币。

原始资金：**300SW币**，可用于创建一个新的城镇。

SW币的产出渠道为：服务器收购基础的物料（目前为粗金，兑换比 1：1）

可通过发展城镇人数来达到服务器投放SW银行来低价获得SW货币。

<img src="/images/buy.png" alt="buy">


## 经济系统

服务器的**物品经济完全靠玩家之间交易流通**，仅提供基础的物料收购商店，无其余收购商店。

服务器会略高于市场价出售稀缺物品：升级模板、信标物品等。

## 卫星地图

你可以在群组公告中来查看卫星地图地址。

具体访问地址会变化，具体以群公告为准。

在卫星地图中，**玩家行踪将默认显示**，会自动显示城镇、国家区域 ，并且您可自行选择个人显示/隐藏行踪。

在地图中隐藏 /dynmap hide

在地图中显示 /dynmap show

<img src="/images/map.png" alt="map">

## 在线奖励

每小时30SW币，每天上限500SW币。

<img src="/images/reward.png" alt="reward">


## 常用指令

/back 返回死亡地点<br>
/sethome 设置家<br> /home 回家
/spawn 返回主城<br>
/t spawn 回到城镇<br>
/n spawn 回到国家<br>
/pay <玩家名> <金额> 给玩家转账<br>
/ca 打开全球市场<br>
将手持物品放入全球市场售卖 /ca sell 价格<br>

主城NPC 可领取新人装备（全套石工具+铁套）

**传送指令皆存在冷却+传送等待时间**，SW战争/PVP时谨慎使用。

服务器每个玩家最多设置1个家。

## 箱子商店

玩家可自行生成箱子商店，手持需要出售/收购的物品点击箱子后输入价格。

转为收购输入命令:/qs buy

不想摆摊可将物品放入全球市场出售，手持物品输入/ca sell 价格

<img src="/images/shop.png" alt="shop">

## PVP
目前为高版本1.9+PVP机制。<br>

服务器允许除主城以外的区域自由 PVP（除主城外），死亡不掉落（除地狱）。

当玩家PvP标记另一位玩家后退出，仍会受到被击杀惩罚。

被玩家攻击或攻击玩家后会进入 PVP 管理状态，状态期间将会禁用所有指令。

PVP死亡有几率触发死亡裁决，掉落头颅，掉落5格以内的背包物品[盔甲、武器除外]。<br>

新建城镇/国家默认开启PVP，**不需要PVP需要您自行取消**：<br>
创建城镇后使用/t toggle pvp off<br>
创建国家后/n toggle pvp off<br>

<img src="/images/skull.png" alt="skull">


## 新人保护

新玩家进服 30 分钟 PVP免疫。<br>
新城镇 48小时内不会被宣战。<br>
建议新人自行关闭地图显示、城镇PVP。<br>

## 更多附魔

更多附魔插件为**EcoEnchants**，服务器目前引入20+生存拓展附魔，移除了影响玩家PVP的附魔。
稀有度从低到高分为：普通、不凡、稀有、史诗、传说、稀世。

玩家在附魔台附魔道具时根据类型伴随原生附魔出现，无法在附魔台提前获知，稀有度出现具有最低的等级要求。

附魔种类可使用/ecoenchants gui 查看


|||
|--|--|
|普通|1级|
|不凡|8级|
|稀有|16级|
|史诗|20级|
|传说|25级|
|稀世|30级|

<img src="/images/eco-gui.png" alt="eco-gui">

## 真实耕作
每个植物受当前土地影响，手持种子右键土地查看是否可种植。<br>
种植时需要在土地上放置堆肥桶并填充肥料。<br>
需要使用锄头收获农作物，空手点击农作物不会掉落。<br>
收获后，土方块会恢复原样，需要再次使用锄头右键点击土方块。<br>

<img src="/images/seed.png" alt="seed">

## 死亡效果

死亡不会自动恢复饱食度。<br>


## 酿酒

教程编写中

## 展示图片

首先获取你需要展示的图片的网络连接地址（URL）<br>
在游戏中确定需要展示的大小，放置物品展示架，如：长2 宽3，放置2x3的物品展示架<br>
在背包中准备好对应数量的空地图<br>
使用命令/if create <名称> <链接URL> <长度> <宽度><br>
使用命令后把空地图替换成有内容的地图<br>
再右键放置到展示架上即可。<br>

<img src="/images/img.png" alt="img">


## 婚姻

在minecraft服务器中与另一位玩家(不论男女)结婚，来获得些额外的乐♂趣。<br>
教程wiki: https://mineplugin.org/MarriageMaster

## 食物保质期
SW中大部分食物存在保质期，会显示在物品上<br>
放入冰箱中会大幅度增加保质期<br>

<img src="/images/food.png" alt="food"><br>

<img src="/images/fi.png" alt="fi">

## 四季
SW的生存世界存在四季交替并存在温度变化，四季会影响地图的地形颜色、玩家体温。<br>
玩家的体温会在行动条、计分板上显示。<br>
体温过高：需要降温，靠近冰块等物体或脱掉装备。<br>
体温过高：需升温保暖，靠近熔浆、火把等物体或穿上装备。<br>
每种材质的装备的保暖程度不一致。<br>

<img src="/images/temp.png" alt="temp">

## 宠物

查看宠物商店 /petshop<br>
选择宠物技能树 /pcst<br>
指令帮助 /pets help<br>
宠物数值支持升级，打怪后会自动获取经验，并可根据技能树实现不同的作用，例如PVP等。<br>

<img src="/images/pet.png" alt="pet"><br>

<img src="/images/pet1.png" alt="pet1">

## 技能系统

采用mcmmo插件，武器增益技能在PVP时无效。

<img src="/images/mcmmo.png" alt="mcmmo">


## 限制内容

移除地狱、末地世界，受影响物资转为服务器投入。<br>
禁止红石、经验修补、不死图腾。<br>
无法合成末影箱、附魔台、潜影盒。<br>
无法生成凋零、地狱门、村民。<br>
液体不会流动。<br>