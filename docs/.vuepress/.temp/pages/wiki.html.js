import comp from "C:/Users/14488/Desktop/simple-world-wiki/simple-world-wiki/docs/.vuepress/.temp/pages/wiki.html.vue"
const data = JSON.parse("{\"path\":\"/wiki.html\",\"title\":\"游玩须知\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"管理规章\",\"slug\":\"管理规章\",\"link\":\"#管理规章\",\"children\":[{\"level\":3,\"title\":\"管理组\",\"slug\":\"管理组\",\"link\":\"#管理组\",\"children\":[]},{\"level\":3,\"title\":\"游戏发言\",\"slug\":\"游戏发言\",\"link\":\"#游戏发言\",\"children\":[]}]}],\"git\":{\"updatedTime\":1728914353000,\"contributors\":[{\"name\":\"nott\",\"email\":\"isnott1028@outlook.com\",\"commits\":1}]},\"filePathRelative\":\"wiki.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
