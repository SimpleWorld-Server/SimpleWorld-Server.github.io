import{_ as e,c as a,a as r,o as l}from"./app-B8AqFxic.js";const n="/images/skull.png",i={};function p(d,t){return l(),a("div",null,t[0]||(t[0]=[r('<ol><li>服务器死亡不会自动恢复饱腹值，需要玩家自行恢复。<br></li><li>生存世界非PVP死亡不掉落、不扣除SW币。<br></li><li>生存世界PVP死亡，被杀死玩家有概率掉落背包内物品、掉落玩家头颅。<br></li><li>地狱世界死亡掉落（包括所有死亡状态），会在玩家死亡地附近生成 15 分钟的死亡点 ，玩家可在死亡点处找回物品（死亡点附近存在岩浆、石头等覆盖物时会在安全处保存，具体以插件消息提示坐标为准）。<br></li></ol><h2 id="pvp" tabindex="-1"><a class="header-anchor" href="#pvp"><span>PVP</span></a></h2><p>目前为高版本1.9+PVP机制。<br> 服务器允许除主城以外的区域自由 PVP。<br></p><p>当玩家PvP标记另一位玩家后退出，仍会受到被击杀惩罚。<br> 被玩家攻击或攻击玩家后会进入 PVP 管理状态，状态期间将会禁用所有指令。<br></p><p>新建城镇/国家默认开启PVP，<strong>不需要PVP需要您自行取消</strong>：<br> 创建城镇后使用/t toggle pvp off<br> 创建国家后/n toggle pvp off<br></p><h2 id="pvp裁决" tabindex="-1"><a class="header-anchor" href="#pvp裁决"><span>PvP裁决</span></a></h2><p>Sw引入了PVP的<code>裁决系统</code>，PVP死亡时随机掉落某些物品+玩家头颅，只在玩家PVP时触发。<br> 【参与战争的玩家PVP时不会掉落】<br></p><h3 id="头颅掉落" tabindex="-1"><a class="header-anchor" href="#头颅掉落"><span>头颅掉落</span></a></h3><p>玩家PVP时有概率掉落角色头颅。<br><img src="'+n+'" alt="skull"></p><h3 id="死亡裁决" tabindex="-1"><a class="header-anchor" href="#死亡裁决"><span>死亡裁决</span></a></h3><p>玩家PVP死亡时，<code>有概率</code>掉落[5格]以内的背包物品[盔甲、武器除外]。<br></p><h3 id="悬赏系统" tabindex="-1"><a class="header-anchor" href="#悬赏系统"><span>悬赏系统</span></a></h3><p>“有钱能使鬼推磨”,SW引入了玩家悬赏系统。<br> 你可以支付一定金额悬赏某个玩家，或者叠加某个玩家的悬赏金直到他被击杀。<br></p><table><thead><tr><th>命令</th><th>作用</th></tr></thead><tbody><tr><td>/of page</td><td>查看悬赏列表</td></tr><tr><td>/of &lt;玩家名称&gt; &lt;金额&gt;</td><td>发出一份悬赏</td></tr><tr><td>/of add &lt;玩家&gt; &lt;金额&gt;</td><td>叠加某位玩家的悬赏金额</td></tr></tbody></table>',14)]))}const o=e(i,[["render",p],["__file","index.html.vue"]]),c=JSON.parse('{"path":"/notes/pvp/","title":"PVP及死亡效果","lang":"zh-CN","frontmatter":{"title":"PVP及死亡效果","createTime":"2024/10/18 20:35:08","permalink":"/notes/pvp/"},"headers":[{"level":2,"title":"PVP","slug":"pvp","link":"#pvp","children":[]},{"level":2,"title":"PvP裁决","slug":"pvp裁决","link":"#pvp裁决","children":[{"level":3,"title":"头颅掉落","slug":"头颅掉落","link":"#头颅掉落","children":[]},{"level":3,"title":"死亡裁决","slug":"死亡裁决","link":"#死亡裁决","children":[]},{"level":3,"title":"悬赏系统","slug":"悬赏系统","link":"#悬赏系统","children":[]}]}],"readingTime":{"minutes":1.7,"words":509},"git":{"createdTime":1729763081000,"updatedTime":1736473719000,"contributors":[{"name":"Nott","email":"nott@163.com","commits":2},{"name":"nott","email":"wannatastetheworld@qq.com","commits":1}]},"filePathRelative":"notes/pvp/info.md","categoryList":[{"id":"4358b5","sort":10000,"name":"notes"},{"id":"89ee00","sort":10006,"name":"pvp"}]}');export{o as comp,c as data};
