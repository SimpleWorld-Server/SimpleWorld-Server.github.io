export const sidebar = {"/":{"/":[{"text":"Wiki简介","link":"/notes/desc/"},{"text":"游玩细则","link":"/notes/rule/"},{"text":"四季","link":"/notes/season/"},{"text":"酿酒","link":"/notes/wine/"},{"text":"小屋资源点","link":"/notes/house/"},{"text":"更多合成","link":"/notes/craft/"},{"text":"更多附魔","link":"/notes/enchants/"},{"text":"城镇玩法","link":"/notes/town/"},{"text":"战争玩法","link":"/notes/war/"},{"text":"结束语","link":"/notes/end/"}]},"__auto__":{}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSidebar) {
    __VUE_HMR_RUNTIME__.updateSidebar(sidebar)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ sidebar }) => {
    __VUE_HMR_RUNTIME__.updateSidebar(sidebar)
  })
}
