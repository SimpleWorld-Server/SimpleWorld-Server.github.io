---
title: 规则
createTime: 2024/10/18 20:33:11
permalink: /notes/rule/
---
## SW币

SimpleWorld的游戏货币，玩家间经济流通的基础货币。
原始资金：**300SW币**，可用于创建一个新的城镇。<br>

SW币的产出渠道为：服务器收购基础的物料，具体收购物料查看[系统商城](/notes/shop/)章节。

<img src="/images/buy.png" alt="buy">


## 经济系统

服务器的**物品经济依赖玩家之间交易流通**。<br>
服务器设置了系统商店，会略高于市场价出售物品。

## 发展/冲突

种田发展、冲突合并由玩家自主控制。

## 卫星地图

你可以在群组公告中来查看卫星地图地址。
具体访问地址会变化，具体以群公告为准。<br>

在卫星地图中，**玩家行踪将默认显示**，会自动显示城镇、国家区域 ，<br>
并且您可自行选择个人显示/隐藏行踪。

在地图中隐藏 /dynmap hide<br>
在地图中显示 /dynmap show

## 在线奖励

每小时30SW币，每天上限500SW币。

<img src="/images/reward.png" alt="reward">

## 常用指令

| 命令               | 作用            |
|------------------|---------------|
| /rtp world world | 随机传送          |
| /back            | 返回死亡地点        |
| /sethome         | 设置家           |
| /home            | 回家            |
| /spawn           | 返回主城          |
| /t spawn         | 回到城镇          |
| /n spawn         | 回到国家          |
| /pay <玩家名> <金额>  | 给玩家转账         |

**传送指令皆存在冷却+传送等待时间**，SW战争/PVP时谨慎使用。<br>
服务器每个玩家最多设置1个家。

## 新人装备

| 物品   | 数量 |
|------|----|
| 皮革套装 | 1  |
| 火把   | 24 |
| 面包   | 32 |
| 橡木   | 16 |
| 圆石   | 32 |

## 箱子商店

玩家可自行生成箱子商店，手持需要出售/收购的物品点击箱子后输入价格。<br>
转为收购输入命令:/qs buy<br>

[//]: # (不想摆摊可将物品放入全球市场出售，手持物品输入/ca sell 价格<br>)

<img src="/images/shop.png" alt="shop">

## 新人保护

新玩家进服 30 分钟 PVP免疫。<br>
新城镇 48小时内不会被宣战。<br>
建议新人自行关闭地图显示、城镇PVP。<br>

## 真实耕作

每个植物受当前土地影响，手持种子右键土地查看是否可种植。<br>
种植时需要在土地上放置堆肥桶并填充肥料。<br>
需要使用锄头收获农作物，空手点击农作物不会掉落。<br>
收获后，土方块会恢复原样，需要再次使用锄头右键点击土方块。<br>

<img src="/images/seed.png" alt="seed">

## 死亡效果

死亡不会自动恢复饱食度。<br>
玩家非PVP死亡时，会扣除少许SW币。<br>
目前地狱开启死亡掉落物品，在玩家死亡处会生成15分钟的天使箱子。<br>

## 食物保质期

SW中大部分食物存在保质期，会显示在物品上<br>
放入冰箱中会大幅度增加保质期<br>

<img src="/images/food.png" alt="food"><br>

<img src="/images/fi.png" alt="fi">

## 婚姻

在minecraft服务器中与另一位玩家(不论男女)结婚，来获得些额外的乐♂趣。<br>
[婚姻插件教程wiki](https://mineplugin.org/MarriageMaster)

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

## 展示图片

首先获取你需要展示的图片的网络连接地址（URL）<br>
在游戏中确定需要展示的大小，放置物品展示架，如：长2 宽3，放置2x3的物品展示架<br>
在背包中准备好对应数量的空地图<br>
使用命令/if create <名称> <链接URL> <长度> <宽度><br>
使用命令后把空地图替换成有内容的地图<br>
再右键放置到展示架上即可。<br>

<img src="/images/img.png" alt="img">

## 音乐插件

SW使用音乐插件[allMusic]，需要自行安装客户端Mod，下载对应的包 xxx-1.xx.AllMusic_client-3.0.4.jar，放入mod文件夹即可<br>
[基岩版无音乐客户端] [Java端点此下载](https://github.com/Coloryr/AllMusic_Client/releases/tag/3.0.4)<br>

## 限制内容

移除末地世界，受影响物资转为服务器投入。<br>
无经验修补、不死图腾。<br>
限制高频红石，无法制作大型机器。<br>
无法合成末影箱、潜影盒[系统商店出售]。<br>
无法生成凋零、村民。<br>
液体不会流动。<br>