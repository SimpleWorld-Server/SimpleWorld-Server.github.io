import comp from "C:/Users/14488/Desktop/simple-world-wiki/simple-world-wiki/docs/.vuepress/.temp/pages/123.html.vue"
const data = JSON.parse("{\"path\":\"/123\",\"title\":\"城镇\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"城镇\",\"createTime\":\"2024/10/18 20:35:08\",\"permalink\":\"/123\"},\"headers\":[{\"level\":2,\"title\":\"城镇守则\",\"slug\":\"城镇守则\",\"link\":\"#城镇守则\",\"children\":[]}],\"readingTime\":{\"minutes\":0.28,\"words\":85},\"filePathRelative\":\"notes/town/town.md\",\"categoryList\":[{\"id\":\"4358b5\",\"sort\":10000,\"name\":\"notes\"},{\"id\":\"da1a65\",\"sort\":10007,\"name\":\"town\"}]}")
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
