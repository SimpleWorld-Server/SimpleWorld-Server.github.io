import comp from "C:/Users/14488/Desktop/simple-world-wiki/simple-world-wiki/docs/.vuepress/.temp/pages/notes/wiki/desc/index.html.vue"
const data = JSON.parse("{\"path\":\"/notes/wiki/desc/\",\"title\":\"介绍\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"介绍\",\"createTime\":\"2024/10/18 20:31:47\",\"permalink\":\"/notes/wiki/desc/\"},\"headers\":[{\"level\":2,\"title\":\"说明\",\"slug\":\"说明\",\"link\":\"#说明\",\"children\":[]},{\"level\":2,\"title\":\"虚拟事件\",\"slug\":\"虚拟事件\",\"link\":\"#虚拟事件\",\"children\":[]}],\"readingTime\":{\"minutes\":0.93,\"words\":278},\"filePathRelative\":\"notes/desc/desc.md\"}")
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