<template><div><h2 id="战争玩法" tabindex="-1"><a class="header-anchor" href="#战争玩法"><span>战争玩法</span></a></h2>
<p>SimpleWorld（以下简称SW）使用Towny为主要的领地/城镇插件，其中使用SiegeWar战争事件插件作为战争玩法的实现，此篇内容主要介绍SiegeWar的使用教程，以下内容默认您已知悉。</p>
<blockquote>
<p>（文中【战争、战斗、国家、城镇】等名词，仅为Minecraft服务器虚拟游戏事件代称）</p>
</blockquote>
<hr>
<h3 id="基础名词" tabindex="-1"><a class="header-anchor" href="#基础名词"><span>基础名词</span></a></h3>
<p>SW币：服务器的基础货币</p>
<p>SW战争：使用SiegeWar插件发起的战争事件总称。</p>
<p>征服战争：国家向城镇发起的战争。</p>
<p>反抗战争：被占领城镇向占领国发起的战争。</p>
<p>野地、野外之地、无主之地：没有被国家、城镇声明的地区。</p>
<p>地皮：城镇每次使用/t claim创建的地块。（plot）</p>
<p>城镇：使用Towny插件创建的城镇。（town）</p>
<p>国家：使用Towny插件创建的国家。（nation）</p>
<p>（每个国家可以拥有多个城镇，一个城镇可以有多块地皮）</p>
<p>居民：国家/城镇 中的玩家。</p>
<p>军衔：国家/城镇领导者向居民设置的军衔（Rank）。</p>
<p>进攻方（ATK）：发起战争的一方势力（进攻国家+盟友）。</p>
<p>防守方（DEF）：防御进攻的一方势力（防守城镇+附属国+盟友）。</p>
<p>战争日：SW玩家可以发起战争的日子（具体时间以群组公告为准）</p>
<p>战斗回合：一次战争中可供玩家（进攻方+防守方）对战的时间段。</p>
<p>战斗点数：一次战斗回合中进攻方、防守方总计的分数。</p>
<p>（一次战争包括若干回合，以全部回合的战斗点数合计计算胜利方。）</p>
<p>战争宝箱：征服战争中进攻方发起战争前将资金存入的系统账户，结束后根据战争胜利结算按比例退回的资金账户。</p>
<p>战争豁免：城镇拥有的不被进攻的时间段。</p>
<p>反抗豁免：国家拥有的不被城镇反抗时间段。</p>
<h3 id="发起前提" tabindex="-1"><a class="header-anchor" href="#发起前提"><span>发起前提</span></a></h3>
<h4 id="征服战争" tabindex="-1"><a class="header-anchor" href="#征服战争"><span>征服战争</span></a></h4>
<p>1、必须由【<strong>国家</strong>】向<strong>非和平状态的城镇</strong>发起。</p>
<p>2、发起国必须向银行（bank）存入目标城镇（<strong>每块地皮 X 20 SW币</strong>）[1] + （<strong>每块地皮 X 5 SW币</strong>）[2]的资金。</p>
<p>3、前提（2）中[1]为<strong>战争宝箱资金</strong>，[2]为<strong>战斗保证金</strong>（系统不退回）。</p>
<p>4、拥有军队，提前向居民分配军衔/n rank add {玩家} {军衔}</p>
<p>5、必须在<strong>战争日</strong>。</p>
<p>国家军衔（上 -&gt; 下等级依次提升）</p>
<table>
<thead>
<tr>
<th>名称</th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td>Private</td>
<td>二等兵</td>
</tr>
<tr>
<td>Sergeant</td>
<td>中士</td>
</tr>
<tr>
<td>Lieutenant</td>
<td>中尉</td>
</tr>
<tr>
<td>Captain</td>
<td>上尉</td>
</tr>
<tr>
<td>Major</td>
<td>少校</td>
</tr>
<tr>
<td>Colonel</td>
<td>上校</td>
</tr>
<tr>
<td>General</td>
<td>将军</td>
</tr>
</tbody>
</table>
<p>其中General(将军)头衔，将军的战争权力为一人之下万人之上，将军或国王可分配国家军衔，开始或放弃进攻城镇，掠夺或占领城镇。</p>
<h4 id="反抗战争" tabindex="-1"><a class="header-anchor" href="#反抗战争"><span>反抗战争</span></a></h4>
<p>1、必须由【<strong>被占领城镇</strong>】向【<strong>占领国</strong>】发起。</p>
<p>2、发起前必须向银行（bank）存入每块地皮 * 5 SW币（保证金）。</p>
<p>3、拥有军队，提前向居民分配军衔/t rank add {玩家} {军衔}</p>
<p>4、必须在<strong>战争日</strong>。</p>
<p>注：发起反抗战争的<strong>城镇仍为战争中的防守方</strong>。</p>
<p>城镇军衔</p>
<table>
<thead>
<tr>
<th>名称</th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td>Guard</td>
<td>守卫</td>
</tr>
</tbody>
</table>
<h3 id="分配军衔" tabindex="-1"><a class="header-anchor" href="#分配军衔"><span>分配军衔</span></a></h3>
<p>国家军衔指令/n rank add 玩家 军衔</p>
<p>城镇军衔指令/t rank add 玩家 军衔</p>
<p>军衔可由<strong>国王/将军/城镇镇长</strong>分配。请注意，镇长分配军衔只于本城镇生效，国王分配军衔于此国家内生效(此国家内所有城镇)。</p>
<p>例：A国B镇爆发战争，B镇长所授予的军衔只可对本镇人员为参战人员，如果想要A国其它城镇(CDEF镇)支援，则需A国国王授予国家军衔。</p>
<h3 id="发动战争" tabindex="-1"><a class="header-anchor" href="#发动战争"><span>发动战争</span></a></h3>
<h4 id="征服战争-1" tabindex="-1"><a class="header-anchor" href="#征服战争-1"><span>征服战争</span></a></h4>
<p>1、在战争日时间段，国王/将军 手持 非白色旗帜，在目标城镇边缘【1】格的野地上放置。</p>
<p>2、已向银行存入足够的战争宝箱+保证金资金。</p>
<p>3、目标城镇<strong>不在战争豁免期</strong>内。</p>
<h4 id="反抗战争-1" tabindex="-1"><a class="header-anchor" href="#反抗战争-1"><span>反抗战争</span></a></h4>
<p>1、城镇已被占领，占领国不在反抗豁免期内。</p>
<p>2、在战争日时间段，被占领城镇城主 手持 非白色旗帜，在城镇边缘【1】格的野地上放置。</p>
<p>3、已向银行存入足够的保证金资金。</p>
<p>注：发起战争只是一种宣战行为，进入战斗回合时才是开启PVP战斗，请勿直接PVP。</p>
<h3 id="准备战斗" tabindex="-1"><a class="header-anchor" href="#准备战斗"><span>准备战斗</span></a></h3>
<p>1、在战争日提前一晚在服务器/私人群组集结你的玩家，目前<strong>SW战争日为法定节假日</strong>。</p>
<p>战争日内可随时宣战，但战斗回合时间是固定的，服务器战争日内有<strong>三个战斗回合</strong>（也就是战争结果会在一天内决出），<strong>每回合一小时</strong>。</p>
<p>2、SW服务器会提前在公告中标识日常的战斗回合时间，如有新开（节假日）会提前告知。</p>
<p>3、<strong>每个回合持续一小时，战争日包含三个回合</strong>，基本上可以延续节假日（周末），没有任何战争的前提下回合会自动取消。</p>
<p>4、参与战斗的人员必须拥有军衔，并且进入战争旗帜区域。（分配军衔见上文）</p>
<p>5、进入战斗后基本的聊天将会禁用（除了/tc /nc /ac）</p>
<p>6、战斗回合中，战斗区域300方块范围内，PVP不掉落（死亡扣除装备5%耐久），非参战人员将会拥有debuff（中毒、挖掘疲劳等）。</p>
<h3 id="进入战斗" tabindex="-1"><a class="header-anchor" href="#进入战斗"><span>进入战斗</span></a></h3>
<p>注：每个战斗回合，攻守双方都应该使用命令/sw hud &lt;城镇名&gt; 查看当前回合的计分板状态。</p>
<p>开始：</p>
<p>1、宣战并开启战斗回合后，进入战斗区域的在线玩家，攻守双方将自动区分阵营，攻守双方各存在一个最高军衔（国王/将军）作为指挥官。</p>
<p>2、如指挥官在战斗区域存活，则玩家可以使用/sw spawn {城镇} 进行传送。</p>
<p>积分获取计算：敌方每一名<strong>带有军衔</strong>的敌人在战争区域中死亡，己方加150分。</p>
<p>争夺旗帜：</p>
<p>1、战斗回合中，参战玩家靠近旗帜，<strong>半径为10格方块，与旗帜同一高度</strong>。</p>
<p>2、战争中无人占领信标显示白光，夺旗中则为黄光，控制权为己方显示绿色，控制权为敌方显示红色，夺旗中人员会显示发光效果。</p>
<p>3、靠近攻城旗6分钟视为夺旗成功。夺旗成功旗子会每分钟根据 (争夺人数<em>10</em>分钟) 为己方提供积分。</p>
<p>4、旗帜易主。如果另一方从己方手中将攻城旗夺走，则视为旗帜易主，易主后攻城旗产生积分数增大3倍。（如控制权再翻转，则倍数加3）</p>
<h3 id="战争结算" tabindex="-1"><a class="header-anchor" href="#战争结算"><span>战争结算</span></a></h3>
<p>当一个战争日中的所有回合进行完毕，系统将所有的战斗回合点数进行统计。</p>
<p><strong>征服战争胜利结果</strong></p>
<p><em>总积分&gt;= [+4999] （或防守方投降）</em></p>
<p>进攻方大获全胜：<strong>回收全部战争宝箱资金 + 占领 + 100%掠夺</strong></p>
<p><em>总积分 &lt;= [0~+4999]</em></p>
<p>进攻方小胜：<strong>战争宝箱资金将于各50%分配给进攻与防守 + 占领 + 50%掠夺</strong></p>
<p><em>总积分 &gt;= [0~-4999]</em></p>
<p>防守方小胜：<strong>战争宝箱资金将于各50%分配给 进攻/防守方</strong></p>
<p><em>防守积分 &lt; [-4999]（或进攻方放弃）</em></p>
<p>防守方大获全胜：回收全部进攻投入的战争宝箱资金</p>
<p><strong>反抗战争胜利结果</strong>:</p>
<p><em>总积分&gt;= [+4999] （或防守方投降）</em></p>
<p>进攻方大获全胜：<strong>占领、100%掠夺</strong></p>
<p><em>总积分 &lt;= [0~+4999]</em></p>
<p>进攻方小胜：<strong>占领+50%掠夺</strong></p>
<p><em>总积分 &gt;= [0~-4999]</em></p>
<p>防守方小胜：无</p>
<p>防守积分 &lt; [-4999]（或进攻方放弃）</p>
<p>防守方大获全胜：</p>
<p><strong>夺回城镇。</strong></p>
<p>进攻方陷入【士气低落】，在未来一周的战争开局中进攻方-1500点数。</p>
<h3 id="战争豁免" tabindex="-1"><a class="header-anchor" href="#战争豁免"><span>战争豁免</span></a></h3>
<p>新城镇48小时内无法被宣战</p>
<p>该城镇受到战争后24小时内无法再被宣战。</p>
<p>反抗豁免：城镇起义后24小时内无法起义。</p>
<h3 id="掠夺" tabindex="-1"><a class="header-anchor" href="#掠夺"><span>掠夺</span></a></h3>
<p>1、获得掠夺权的镇长、国王，在城镇以外1方块的野地上放置一个箱子。</p>
<p>2、掠夺的钱会自动进入银行，总计掠夺额数：城镇总计区块数量*40 SW币。</p>
<p>3、如被掠夺城镇银行存款不够，将会破产，该镇人员将无法于此城镇进行放置方块，招募玩家等。</p>
<p>4、如需解除破产，请输入/t查看城镇具体破产金额，于七天内还清即可。</p>
<h3 id="占领" tabindex="-1"><a class="header-anchor" href="#占领"><span>占领</span></a></h3>
<ol>
<li>获得占领权的镇长、国王，在城镇以外1方块的野地上放置一个非白色旗帜，宣誓主权。</li>
<li>被占领的城镇处于被占领状态，无法输入/n leave离开被占领国家，如想脱离可发起“反抗”战争，或者被占领国踢出。</li>
<li>如果城镇为该国家的最后一个城镇，占领后则宣布该国家覆灭，占领国获得前国家的80%存款，该存款可用于/sw collect（下文）。</li>
<li>占领可获取目标城镇的破坏权限。</li>
</ol>
<h3 id="玩家指令一览" tabindex="-1"><a class="header-anchor" href="#玩家指令一览"><span>玩家指令一览</span></a></h3>
<p>/t rank add {玩家} {军衔}——城镇分配军衔</p>
<p>/n rank add {玩家} {军衔}——国家分配军衔</p>
<p>/sw spawn {城镇}——传送至战争区(指挥官)处</p>
<p>/sw hud {城镇}——打开/关闭战争进度计分板</p>
<p>/t here——查看脚下城镇信息</p>
<p>/sw nation paysoldiers {数额}——作为国王，向参战人员支付军饷，根据军衔等级划分。</p>
<p>/sw collect——作为士兵，从军饷或战争退款中收取应得的费用。</p>
<h3 id="和平城镇" tabindex="-1"><a class="header-anchor" href="#和平城镇"><span>和平城镇</span></a></h3>
<p>/sw town togglepeaceful——作为镇长，设置您的城镇为和平城镇，于七天内确认（新城镇于二天内）</p>
<p>再输入一遍/sw town togglepeaceful可设置为非和平城镇。</p>
<p>新城镇默认为非和平城镇。</p>
<p>和平城镇优势:</p>
<p>和平城镇无法被入侵(插旗入侵机制无效)</p>
<p>和平城镇劣势:</p>
<ol>
<li>和平城镇无法随意移动区块等</li>
<li>和平城镇无法被国家授予军衔</li>
<li>和平城镇易受到附近国家宣示主权。</li>
</ol>
<h4 id="宣示主权" tabindex="-1"><a class="header-anchor" href="#宣示主权"><span>宣示主权</span></a></h4>
<p>在和平城镇的1200格以内，最大的未处于战争状态的+非和平的城镇将是你的守护者城镇。</p>
<p>无论你的守护者城镇属于哪个国家，该国家都可以在你城镇边界插一面非白色任意旗帜，来将你的城镇归入该国家(非入侵，无破坏掠夺，请注意)。</p>
<hr>
</div></template>


