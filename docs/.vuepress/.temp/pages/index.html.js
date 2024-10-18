import comp from "C:/Users/14488/Desktop/simple-world-wiki/simple-world-wiki/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"首页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"config\":[{\"type\":\"hero\",\"full\":true,\"background\":\"tint-plate\",\"hero\":{\"name\":\"Simple World\",\"tagline\":\"\",\"text\":\"一个基于Towny的社会模拟服务器\",\"actions\":[{\"theme\":\"brand\",\"text\":\"查看Wiki →\",\"link\":\"/\"},{\"text\":\"加入我们\",\"link\":\"/notes/join/\",\"theme\":\"alt\"},{\"theme\":\"alt\",\"text\":\"Github\",\"link\":\"https://github.com/Mc-SimpleWorld\"}]}}],\"title\":\"首页\",\"createTime\":\"2024/10/14 21:47:01\",\"permalink\":\"/\",\"pageLayout\":\"home\"},\"headers\":[],\"readingTime\":{\"minutes\":0.35,\"words\":104},\"filePathRelative\":\"README.md\",\"categoryList\":[]}")
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
