<template><div><h2 id="sw币" tabindex="-1"><a class="header-anchor" href="#sw币"><span>SW币</span></a></h2>
<p>SimpleWorld的游戏货币，玩家间经济流通的基础货币。</p>
<p>原始资金：<strong>300SW币</strong>，可用于创建一个新的城镇。</p>
<p>SW币的产出渠道为：服务器收购基础的物料（目前为粗金，兑换比 1：1）</p>
<p>可通过发展城镇人数来达到服务器投放SW银行来低价获得SW货币。</p>
<img src="/images/buy.png" alt="buy">
<h2 id="经济系统" tabindex="-1"><a class="header-anchor" href="#经济系统"><span>经济系统</span></a></h2>
<p>服务器的<strong>物品经济完全靠玩家之间交易流通</strong>，仅提供基础的物料收购商店，无其余收购商店。<br></p>
<p>服务器设置了系统商店，会略高于市场价出售物品。</p>
<h2 id="卫星地图" tabindex="-1"><a class="header-anchor" href="#卫星地图"><span>卫星地图</span></a></h2>
<p>你可以在群组公告中来查看卫星地图地址。<br></p>
<p>具体访问地址会变化，具体以群公告为准。<br></p>
<p>在卫星地图中，<strong>玩家行踪将默认显示</strong>，会自动显示城镇、国家区域 ，<br>
并且您可自行选择个人显示/隐藏行踪。</p>
<p>在地图中隐藏 /dynmap hide<br>
在地图中显示 /dynmap show</p>
<img src="/images/map.png" alt="map">
<h2 id="在线奖励" tabindex="-1"><a class="header-anchor" href="#在线奖励"><span>在线奖励</span></a></h2>
<p>每小时30SW币，每天上限500SW币。</p>
<img src="/images/reward.png" alt="reward">
<h2 id="常用指令" tabindex="-1"><a class="header-anchor" href="#常用指令"><span>常用指令</span></a></h2>
<table>
<thead>
<tr>
<th>命令</th>
<th>作用</th>
</tr>
</thead>
<tbody>
<tr>
<td>/rtp world world</td>
<td>随机传送</td>
</tr>
<tr>
<td>/back</td>
<td>返回死亡地点</td>
</tr>
<tr>
<td>/sethome</td>
<td>设置家</td>
</tr>
<tr>
<td>/home</td>
<td>回家</td>
</tr>
<tr>
<td>/spawn</td>
<td>返回主城</td>
</tr>
<tr>
<td>/t spawn</td>
<td>回到城镇</td>
</tr>
<tr>
<td>/n spawn</td>
<td>回到国家</td>
</tr>
<tr>
<td>/pay &lt;玩家名&gt; &lt;金额&gt;</td>
<td>给玩家转账</td>
</tr>
<tr>
<td>/ca</td>
<td>打开全球市场</td>
</tr>
<tr>
<td>/ca sell &lt;价格&gt;</td>
<td>将手持物品放入全球市场售卖</td>
</tr>
</tbody>
</table>
<p>主城NPC 可领取新人装备（全套石工具+铁套+其余生存物品）。<br>
<strong>传送指令皆存在冷却+传送等待时间</strong>，SW战争/PVP时谨慎使用。<br>
服务器每个玩家最多设置1个家。</p>
<h2 id="箱子商店" tabindex="-1"><a class="header-anchor" href="#箱子商店"><span>箱子商店</span></a></h2>
<p>玩家可自行生成箱子商店，手持需要出售/收购的物品点击箱子后输入价格。<br>
转为收购输入命令:/qs buy<br></p>
<p>不想摆摊可将物品放入全球市场出售，手持物品输入/ca sell 价格<br></p>
<img src="/images/shop.png" alt="shop">
<h2 id="pvp" tabindex="-1"><a class="header-anchor" href="#pvp"><span>PVP</span></a></h2>
<p>目前为高版本1.9+PVP机制。<br></p>
<p>服务器允许除主城以外的区域自由 PVP（除主城外），死亡不掉落（除地狱）。<br></p>
<p>当玩家PvP标记另一位玩家后退出，仍会受到被击杀惩罚。<br>
被玩家攻击或攻击玩家后会进入 PVP 管理状态，状态期间将会禁用所有指令。<br></p>
<p>PVP死亡有几率触发死亡裁决，掉落头颅，掉落5格以内的背包物品[盔甲、武器除外]。<br></p>
<p>新建城镇/国家默认开启PVP，<strong>不需要PVP需要您自行取消</strong>：<br>
创建城镇后使用/t toggle pvp off<br>
创建国家后/n toggle pvp off<br></p>
<img src="/images/skull.png" alt="skull">
<h2 id="新人保护" tabindex="-1"><a class="header-anchor" href="#新人保护"><span>新人保护</span></a></h2>
<p>新玩家进服 30 分钟 PVP免疫。<br>
新城镇 48小时内不会被宣战。<br>
建议新人自行关闭地图显示、城镇PVP。<br></p>
<h2 id="真实耕作" tabindex="-1"><a class="header-anchor" href="#真实耕作"><span>真实耕作</span></a></h2>
<p>每个植物受当前土地影响，手持种子右键土地查看是否可种植。<br>
种植时需要在土地上放置堆肥桶并填充肥料。<br>
需要使用锄头收获农作物，空手点击农作物不会掉落。<br>
收获后，土方块会恢复原样，需要再次使用锄头右键点击土方块。<br></p>
<img src="/images/seed.png" alt="seed">
<h2 id="死亡效果" tabindex="-1"><a class="header-anchor" href="#死亡效果"><span>死亡效果</span></a></h2>
<p>死亡不会自动恢复饱食度。<br></p>
<h2 id="食物保质期" tabindex="-1"><a class="header-anchor" href="#食物保质期"><span>食物保质期</span></a></h2>
<p>SW中大部分食物存在保质期，会显示在物品上<br>
放入冰箱中会大幅度增加保质期<br></p>
<p><img src="/images/food.png" alt="food"><br></p>
<img src="/images/fi.png" alt="fi">
<h2 id="婚姻" tabindex="-1"><a class="header-anchor" href="#婚姻"><span>婚姻</span></a></h2>
<p>在minecraft服务器中与另一位玩家(不论男女)结婚，来获得些额外的乐♂趣。<br>
<a href="https://mineplugin.org/MarriageMaster" target="_blank" rel="noopener noreferrer">婚姻插件教程wiki</a></p>
<h2 id="宠物" tabindex="-1"><a class="header-anchor" href="#宠物"><span>宠物</span></a></h2>
<p>查看宠物商店 /petshop<br>
选择宠物技能树 /pcst<br>
指令帮助 /pets help<br>
宠物数值支持升级，打怪后会自动获取经验，并可根据技能树实现不同的作用，例如PVP等。<br></p>
<p><img src="/images/pet.png" alt="pet"><br></p>
<img src="/images/pet1.png" alt="pet1">
<h2 id="技能系统" tabindex="-1"><a class="header-anchor" href="#技能系统"><span>技能系统</span></a></h2>
<p>采用mcmmo插件，武器增益技能在PVP时无效。</p>
<img src="/images/mcmmo.png" alt="mcmmo">
<h2 id="展示图片" tabindex="-1"><a class="header-anchor" href="#展示图片"><span>展示图片</span></a></h2>
<p>首先获取你需要展示的图片的网络连接地址（URL）<br>
在游戏中确定需要展示的大小，放置物品展示架，如：长2 宽3，放置2x3的物品展示架<br>
在背包中准备好对应数量的空地图<br>
使用命令/if create &lt;名称&gt; &lt;链接URL&gt; &lt;长度&gt; &lt;宽度&gt;<br>
使用命令后把空地图替换成有内容的地图<br>
再右键放置到展示架上即可。<br></p>
<img src="/images/img.png" alt="img">
<h2 id="限制内容" tabindex="-1"><a class="header-anchor" href="#限制内容"><span>限制内容</span></a></h2>
<p>移除末地世界，受影响物资转为服务器投入。<br>
无红石生电、经验修补、不死图腾。<br>
无法合成末影箱、附魔台、潜影盒[系统商店出售]。<br>
无法生成凋零、地狱门、村民。<br>
液体不会流动。<br></p>
</div></template>


