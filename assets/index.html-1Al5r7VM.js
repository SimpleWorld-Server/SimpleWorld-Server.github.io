import{_ as l,c as a,a as e,b as t,o as r}from"./app-B8AqFxic.js";const n={};function o(i,d){return r(),a("div",null,d[0]||(d[0]=[e('<h2 id="战争玩法" tabindex="-1"><a class="header-anchor" href="#战争玩法"><span>战争玩法</span></a></h2><p>SimpleWorld（以下简称SW）使用Towny为主要的领地/城镇插件，其中使用SiegeWar战争事件插件作为战争玩法的实现， 此篇内容主要介绍SiegeWar的使用教程，以下内容默认您已知悉。</p><blockquote><p>（文中【战争、战斗、国家、城镇】等名词，仅为Minecraft服务器虚拟游戏事件代称）</p></blockquote><h2 id="基础名词" tabindex="-1"><a class="header-anchor" href="#基础名词"><span>基础名词</span></a></h2><table><thead><tr><th>名称</th><th>意义</th></tr></thead><tbody><tr><td>SW币</td><td>服务器的基础货币</td></tr><tr><td>SW战争</td><td>使用SiegeWar插件发起的战争事件总称。</td></tr><tr><td>征服战争</td><td>国家向城镇发起的战争。</td></tr><tr><td>反抗战争</td><td>被占领城镇向占领国发起的战争。</td></tr><tr><td>野地、野外之地、无主之地</td><td>没有被国家、城镇声明的地区。</td></tr><tr><td>地皮</td><td>城镇每次使用/t claim创建的地块。（plot）</td></tr><tr><td>城镇</td><td>使用Towny插件创建的城镇。（town）</td></tr><tr><td>国家</td><td>使用Towny插件创建的国家。（nation）（每个国家可以拥有多个城镇，一个城镇可以有多块地皮）</td></tr><tr><td>居民</td><td>国家/城镇 中的玩家。</td></tr><tr><td>军衔</td><td>国家/城镇领导者向居民设置的军衔（Rank）。</td></tr><tr><td>进攻方（ATK）</td><td>发起战争的一方势力（进攻国家+盟友）。</td></tr><tr><td>防守方（DEF）</td><td>防御进攻的一方势力（防守城镇+附属国+盟友）。</td></tr><tr><td>战争日</td><td>SW玩家可以发起战争的日子（具体时间以群组公告为准）</td></tr><tr><td>战斗回合</td><td>一次战争中可供玩家（进攻方+防守方）对战的时间段。</td></tr><tr><td>战斗点数</td><td>一次战斗回合中进攻方、防守方总计的分数。（一次战争包括若干回合，以全部回合的战斗点数合计计算胜利方。）</td></tr><tr><td>战争宝箱</td><td>征服战争中进攻方发起战争前将资金存入的系统账户，结束后根据战争胜利结算按比例退回的资金账户。</td></tr><tr><td>战争豁免</td><td>城镇拥有的不被进攻的时间段。</td></tr><tr><td>反抗豁免</td><td>国家拥有的不被城镇反抗时间段。</td></tr></tbody></table><h2 id="战争前提" tabindex="-1"><a class="header-anchor" href="#战争前提"><span>战争前提</span></a></h2><p>发动战争需要做好准备工作，不可随意发动。</p><h3 id="征服战争前提" tabindex="-1"><a class="header-anchor" href="#征服战争前提"><span>征服战争前提</span></a></h3><p>1、必须由【<code>国家</code>】向<code>非和平状态、非战争豁免期</code>的<code>城镇</code>发起。<br></p><p>2、发起国必须向银行（bank）存入目标城镇（<code>每块地皮 X 20 SW币</code>）[1] + （<code>每块地皮 X 5 SW币</code>）[2]的资金。</p><p>3、前提（2）中[1]为<code>战争宝箱资金</code>，[2]为<code>战斗保证金</code>（系统不退回）。</p><p>4、拥有军队，提前向居民分配军衔<code>/n rank add {玩家} {军衔}</code></p><p>5、必须在<code>战争日（周六）</code>。</p><p>国家军衔（上 -&gt; 下等级依次提升）</p><table><thead><tr><th>名称</th><th></th></tr></thead><tbody><tr><td>Private</td><td>二等兵</td></tr><tr><td>Sergeant</td><td>中士</td></tr><tr><td>Lieutenant</td><td>中尉</td></tr><tr><td>Captain</td><td>上尉</td></tr><tr><td>Major</td><td>少校</td></tr><tr><td>Colonel</td><td>上校</td></tr><tr><td>General</td><td>将军</td></tr></tbody></table><p>其中General(将军)头衔，将军的战争权力为一人之下万人之上，将军或国王可分配国家军衔，开始或放弃进攻城镇，掠夺或占领城镇。</p><h3 id="反抗战争前提" tabindex="-1"><a class="header-anchor" href="#反抗战争前提"><span>反抗战争前提</span></a></h3><p>1、必须由【<code>被占领城镇</code>】向【<code>占领国</code>】发起。</p><p>2、发起前必须向银行（bank）存入<code>每块地皮 * 5 SW币</code>（保证金）。</p><p>3、拥有军队，提前向居民分配军衔<code>/t rank add {玩家} {军衔}</code></p><p>4、必须在<code>战争日</code>。</p><p>注：发起反抗战争的<code>城镇</code>仍为战争中的<code>防守方</code>。</p><p>城镇军衔</p><table><thead><tr><th>名称</th><th></th></tr></thead><tbody><tr><td>Guard</td><td>守卫</td></tr></tbody></table><h2 id="分配军衔方式" tabindex="-1"><a class="header-anchor" href="#分配军衔方式"><span>分配军衔方式</span></a></h2><table><thead><tr><th>区域</th><th>指令</th></tr></thead><tbody><tr><td>国家</td><td>/n rank add &lt;玩家&gt; &lt;军衔&gt;</td></tr><tr><td>城镇</td><td>/t rank add &lt;玩家&gt; &lt;军衔&gt;</td></tr></tbody></table><p>军衔可由<code>国王</code>/<code>将军</code>/<code>城镇镇长</code>分配。<br> 请注意，<code>镇长分配</code>军衔只于<code>本城镇生效</code>，国王分配军衔于此国家内生效。</p><h2 id="发动流程" tabindex="-1"><a class="header-anchor" href="#发动流程"><span>发动流程</span></a></h2><h3 id="征服战争" tabindex="-1"><a class="header-anchor" href="#征服战争"><span>征服战争</span></a></h3><ol><li><p>在战争日时间段，国王/将军 手持 <code>非白色旗帜</code>，在目标城镇边缘【1】格的野地上放置。</p></li><li><p>已向银行存入足够的战争宝箱+保证金资金。</p></li><li><p>目标城镇<code>不在战争豁免期</code>内。</p></li></ol><h3 id="反抗战争" tabindex="-1"><a class="header-anchor" href="#反抗战争"><span>反抗战争</span></a></h3><ol><li><p>城镇已被占领，占领国不在反抗豁免期内。</p></li><li><p>在战争日时间段，被占领城镇城主 手持 非白色旗帜，在城镇边缘【1】格的野地上放置。</p></li><li><p>已向银行存入足够的保证金资金。</p></li></ol><p>注：发起战争只是一种宣战行为，进入战斗回合时才是开启PVP战斗，请勿直接PVP。</p><h2 id="准备战斗" tabindex="-1"><a class="header-anchor" href="#准备战斗"><span>准备战斗</span></a></h2><ol><li><p>在战争回合前在服务器/私人群组集结你的玩家，目前<code>SW战争日</code>为<code>周六</code>。<br> 战争日内可随时宣战，战斗回合时间:<code>18:00</code>,<code>19:30</code>，<br> 每回合<code>30分钟</code>。</p></li><li><p>每个回合持续<code>30分钟</code>，战争日包含<code>两个回合</code>，没有任何战争下回合会自动取消。</p></li><li><p>参与战斗的人员必须拥有军衔，并且进入战争旗帜区域。（分配军衔见上文）</p></li><li><p>进入战斗后基本的聊天将会禁用（除了<code>/tc</code> <code>/nc</code> <code>/ac</code>）</p></li><li><p>战斗回合中，战斗区域300方块范围内，PVP不掉落（死亡扣除装备5%耐久），非参战人员将会拥有debuff（中毒、挖掘疲劳等）。</p></li></ol><h2 id="进入战斗" tabindex="-1"><a class="header-anchor" href="#进入战斗"><span>进入战斗</span></a></h2><p>进入每个战斗回合，攻守双方都应该使用命令<code>/sw hud &lt;城镇名&gt;</code> 查看当前回合的计分板状态。</p><p>开始：</p><ol><li>宣战并开启战斗回合后，进入战斗区域的在线玩家，<br> 攻守双方将自动区分阵营，攻守双方各存在一个最高军衔（国王/将军）作为指挥官。</li><li>如指挥官在战斗区域存活，则玩家可以使用/sw spawn {城镇} 进行传送。</li></ol><p>积分计算：每一名<code>带有军衔</code>的敌人在战争区域中死亡加150分。</p><p>争夺旗帜：</p><ol><li>战斗回合中，参战玩家靠近旗帜，半径为<code>2格方块</code>，与旗帜同一高度。<br></li><li>战争中无人占领信标显示白光，夺旗中则为黄光，控制权为己方显示绿色，<br> 控制权为敌方显示红色，夺旗中人员会显示发光效果。</li><li>靠近攻城旗6分钟视为夺旗成功。夺旗成功旗子会每分钟根据 (<code>争夺人数 x 10 x 每分钟</code>) 为己方提供积分。<br></li><li>旗帜易主。如果另一方从己方手中将攻城旗夺走，则视为旗帜易主， 易主后攻城旗产生积分数增大3倍。（如控制权再翻转，则倍数加3）<br></li></ol><h2 id="放弃战斗" tabindex="-1"><a class="header-anchor" href="#放弃战斗"><span>放弃战斗</span></a></h2><p>当你的团队无力支持下个战斗回合，可以在战旗旁边插上白色旗帜，放弃回合<br> 需要进行二次确认，下一个战斗回合开始后进行确认。</p><h2 id="战争结算" tabindex="-1"><a class="header-anchor" href="#战争结算"><span>战争结算</span></a></h2><p>当一个战争日中的所有回合进行完毕，系统将所有的战斗回合点数进行统计。<br></p><h3 id="战争胜利结果" tabindex="-1"><a class="header-anchor" href="#战争胜利结果"><span>战争胜利结果</span></a></h3><table><thead><tr><th>全部回合总积分</th><th>结果说明</th></tr></thead><tbody><tr><td>总积分&gt;= [+4999] （或防守方投降）</td><td>进攻方大获全胜</td></tr><tr><td>总积分 &lt;= [0~+4999]</td><td>进攻方小胜</td></tr><tr><td>总积分 &gt;= [0~-4999]</td><td>防守方小胜</td></tr><tr><td>防守积分 &lt; [-4999]（或进攻方放弃）</td><td>防守方大获全胜</td></tr></tbody></table><h3 id="战利品处置" tabindex="-1"><a class="header-anchor" href="#战利品处置"><span>战利品处置</span></a></h3><table><thead><tr><th>战争类型</th><th>获胜类型</th><th>战利品处置</th></tr></thead><tbody><tr><td>征服</td><td>进攻方大获全胜</td><td><strong>回收全部战争宝箱资金 + 占领 + 100%掠夺</strong></td></tr><tr><td></td><td>进攻方小胜</td><td><strong>战争宝箱资金将于各50%分配给进攻与防守 + 占领 + 50%掠夺</strong></td></tr><tr><td></td><td>防守方小胜</td><td><strong>战争宝箱资金将于各50%分配给 进攻/防守方</strong></td></tr><tr><td></td><td>防守方大获全胜</td><td><strong>回收全部战争宝箱资金</strong></td></tr><tr><td>反抗</td><td>进攻方大获全胜</td><td><strong>占领、100%掠夺</strong></td></tr><tr><td></td><td>进攻方小胜</td><td><strong>占领+50%掠夺</strong></td></tr><tr><td></td><td>防守方小胜</td><td><strong>无</strong></td></tr><tr><td></td><td>防守方大获全胜</td><td><strong>进攻方陷入【士气低落】，在未来一周的战争开局中进攻方-1500点数</strong></td></tr></tbody></table><h2 id="掠夺" tabindex="-1"><a class="header-anchor" href="#掠夺"><span>掠夺</span></a></h2><ol><li>获得掠夺权的镇长、国王，在城镇以外1方块的野地上放置一个箱子。</li><li>掠夺的钱会自动进入银行，总计掠夺额数：城镇总计区块数量 * 40 SW币。</li><li>如被掠夺城镇银行存款不够，将会破产，该镇人员将无法于此城镇进行放置方块，招募玩家等。</li><li>如需解除破产，请输入<code>/t info </code>查看城镇具体破产金额，于七天内还清即可。</li></ol><h2 id="占领" tabindex="-1"><a class="header-anchor" href="#占领"><span>占领</span></a></h2><ol><li>获得占领权的镇长、国王，在城镇以外1方块的野地上放置一个非白色旗帜，宣誓主权。</li><li>被占领的城镇处于被占领状态，无法输入<code>/n leave</code>离开被占领国家，如想脱离可发起“反抗”战争，或者被占领国踢出。</li><li>如果城镇为该国家的最后一个城镇，占领后则宣布该国家覆灭，占领国获得前国家的80%存款，该存款可用于<code>/sw collect</code>（下文）。</li><li>占领可获取目标城镇的破坏权限。</li></ol><h2 id="战争豁免期" tabindex="-1"><a class="header-anchor" href="#战争豁免期"><span>战争豁免期</span></a></h2><ol><li>新城镇<code>48小时</code>内无法被宣战</li><li>该城镇受到战争后<code>48小时</code>内无法再被宣战。</li><li>反抗豁免：城镇起义后<code>48小时</code>内无法起义。</li></ol><h2 id="战争指令一览" tabindex="-1"><a class="header-anchor" href="#战争指令一览"><span>战争指令一览</span></a></h2>',57),t("table",null,[t("thead",null,[t("tr",null,[t("th",null,"指令"),t("th",null,"作用")])]),t("tbody",null,[t("tr",null,[t("td",{军衔:""},"/t rank add {玩家}"),t("td",null,"城镇分配军衔")]),t("tr",null,[t("td",{军衔:""},"/n rank add {玩家}"),t("td",null,"国家分配军衔")]),t("tr",null,[t("td",{城镇:""},"/sw spawn"),t("td",null,"传送至战争区(指挥官)处")]),t("tr",null,[t("td",{发生战争的城镇名称:""},"/sw hud"),t("td",null,"打开/关闭战争进度计分板")]),t("tr",null,[t("td",null,"/t here"),t("td",null,"查看脚下城镇信息")]),t("tr",null,[t("td",{数额:""},"/sw nation paysoldiers"),t("td",null,"作为国王，向参战人员支付军饷，根据军衔等级划分。")]),t("tr",null,[t("td",null,"/sw collect"),t("td",null,"作为士兵，从军饷或战争退款中收取应得的费用。")])])],-1),e('<h2 id="和平城镇" tabindex="-1"><a class="header-anchor" href="#和平城镇"><span>和平城镇</span></a></h2><p>新城镇默认为非和平城镇。<br><strong>国家首都</strong>无法设置和平。<br></p><p>设置和平需要作为镇长使用命令<code>/sw town togglepeaceful</code><br> 在七天内进行二次确认（新城镇于俩天内）<br> 再输入一遍<code>/sw town togglepeaceful</code><br></p><p>和平城镇优势:</p><ol><li>和平城镇无法被入侵(插旗入侵机制无效)</li></ol><p>和平城镇劣势:</p><ol><li>和平城镇无法随意移动区块等</li><li>和平城镇无法被国家授予军衔</li><li>和平城镇易受到附近国家宣示主权。</li></ol><h3 id="宣示主权" tabindex="-1"><a class="header-anchor" href="#宣示主权"><span>宣示主权</span></a></h3><p>在和平城镇的<code>1200格</code>以内，最大的未处于战争状态的+非和平的城镇将是你的守护者城镇。<br> 无论你的守护者城镇属于哪个国家，该国家都可以在你城镇边界插一面非白色任意旗帜，来将你的城镇归入该国家(非入侵，无破坏掠夺权)。</p>',9)]))}const h=l(n,[["render",o],["__file","index.html.vue"]]),s=JSON.parse('{"path":"/notes/war/","title":"战争玩法","lang":"zh-CN","frontmatter":{"title":"战争玩法","createTime":"2024/10/18 20:35:24","permalink":"/notes/war/"},"headers":[{"level":2,"title":"战争玩法","slug":"战争玩法","link":"#战争玩法","children":[]},{"level":2,"title":"基础名词","slug":"基础名词","link":"#基础名词","children":[]},{"level":2,"title":"战争前提","slug":"战争前提","link":"#战争前提","children":[{"level":3,"title":"征服战争前提","slug":"征服战争前提","link":"#征服战争前提","children":[]},{"level":3,"title":"反抗战争前提","slug":"反抗战争前提","link":"#反抗战争前提","children":[]}]},{"level":2,"title":"分配军衔方式","slug":"分配军衔方式","link":"#分配军衔方式","children":[]},{"level":2,"title":"发动流程","slug":"发动流程","link":"#发动流程","children":[{"level":3,"title":"征服战争","slug":"征服战争","link":"#征服战争","children":[]},{"level":3,"title":"反抗战争","slug":"反抗战争","link":"#反抗战争","children":[]}]},{"level":2,"title":"准备战斗","slug":"准备战斗","link":"#准备战斗","children":[]},{"level":2,"title":"进入战斗","slug":"进入战斗","link":"#进入战斗","children":[]},{"level":2,"title":"放弃战斗","slug":"放弃战斗","link":"#放弃战斗","children":[]},{"level":2,"title":"战争结算","slug":"战争结算","link":"#战争结算","children":[{"level":3,"title":"战争胜利结果","slug":"战争胜利结果","link":"#战争胜利结果","children":[]},{"level":3,"title":"战利品处置","slug":"战利品处置","link":"#战利品处置","children":[]}]},{"level":2,"title":"掠夺","slug":"掠夺","link":"#掠夺","children":[]},{"level":2,"title":"占领","slug":"占领","link":"#占领","children":[]},{"level":2,"title":"战争豁免期","slug":"战争豁免期","link":"#战争豁免期","children":[]},{"level":2,"title":"战争指令一览","slug":"战争指令一览","link":"#战争指令一览","children":[]},{"level":2,"title":"和平城镇","slug":"和平城镇","link":"#和平城镇","children":[{"level":3,"title":"宣示主权","slug":"宣示主权","link":"#宣示主权","children":[]}]}],"readingTime":{"minutes":8.93,"words":2678},"git":{"createdTime":1729272814000,"updatedTime":1736473719000,"contributors":[{"name":"Nott","email":"nott@163.com","commits":2},{"name":"nott","email":"isnott1028@outlook.com","commits":2},{"name":"nott","email":"wannatastetheworld@qq.com","commits":1}]},"filePathRelative":"notes/war/war.md","categoryList":[{"id":"4358b5","sort":10000,"name":"notes"},{"id":"baf74d","sort":10017,"name":"war"}]}');export{h as comp,s as data};
