import comp from "C:/Users/14488/Desktop/simple-world-wiki/simple-world-wiki/docs/.vuepress/.temp/pages/desc.html.vue"
const data = JSON.parse("{\"path\":\"/desc.html\",\"title\":\"SimpleWorld Wiki\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"说明\",\"slug\":\"说明\",\"link\":\"#说明\",\"children\":[]},{\"level\":2,\"title\":\"虚拟事件\",\"slug\":\"虚拟事件\",\"link\":\"#虚拟事件\",\"children\":[]}],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"desc.md\"}")
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
