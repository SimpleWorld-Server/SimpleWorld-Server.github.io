---
title: 账号绑定
createTime: 2024/10/18 20:33:11
permalink: /notes/bind/

---

# 账号绑定

为减少服务器玩家的账号被盗，增加玩家的信息真实性。<br>
SW开启了绑定MC服务器玩家-QQ账号的功能<br>

## 如何绑定

通过玩家自助私聊服务器机器人进行绑定。

<img src="/images/bind.png" alt="bd"><br>

注：基岩版玩家需在名称前带"BE_"前缀，在游戏里TAB显示什么名称就需要打什么名称。<br>

例如：客户端名称设定为"test",基岩版玩家绑定时需要发送：/绑定 BE_test 绑定码<br>
Java端发送：/绑定 test 绑定码

## 获取绑定码

玩家没有绑定码可登录服务器，没有绑定的玩家将会在登录成功几秒后被移出。<br>
退出屏幕信息会显示玩家的绑定码(code).

<img src="/images/code.png" alt="bd"><br>

<img src="/images/kick.png" alt="bd"><br>

## 注意事项
目前不支持换号、不支持一个QQ号码绑定多个MC服务器玩家。<br>