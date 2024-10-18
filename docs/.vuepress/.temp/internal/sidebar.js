export const sidebar = {"/":{"/":[{"text":"Wiki简介","link":"/notes/desc/"},{"text":"游玩规则","link":"/notes/rule/"},{"text":"城镇规则","link":"/notes/town/"},{"text":"小屋资源点","link":"/notes/house/"},{"text":"战争玩法","link":"/notes/war/"},{"text":"结束语","link":"/notes/end/"}]},"__auto__":{}}

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
