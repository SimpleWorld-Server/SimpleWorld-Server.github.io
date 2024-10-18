import comp from "C:/Users/14488/Desktop/simple-world-wiki/simple-world-wiki/docs/.vuepress/.temp/pages/join.html.vue"
const data = JSON.parse("{\"path\":\"/join.html\",\"title\":\"加入我们\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"QQ交流群\",\"slug\":\"qq交流群\",\"link\":\"#qq交流群\",\"children\":[]},{\"level\":2,\"title\":\"QQ频道\",\"slug\":\"qq频道\",\"link\":\"#qq频道\",\"children\":[]},{\"level\":2,\"title\":\"kook频道\",\"slug\":\"kook频道\",\"link\":\"#kook频道\",\"children\":[]}],\"git\":{\"updatedTime\":1728914353000,\"contributors\":[{\"name\":\"nott\",\"email\":\"isnott1028@outlook.com\",\"commits\":1}]},\"filePathRelative\":\"join.md\"}")
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
