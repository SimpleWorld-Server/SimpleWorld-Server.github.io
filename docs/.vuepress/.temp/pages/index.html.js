import comp from "C:/Users/YXY-HS/Desktop/wiki/vuepress-starter/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Home\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"title\":\"Home\",\"heroImage\":\"https://img.picui.cn/free/2024/10/14/670ce22f1adc8.png\",\"actions\":[{\"text\":\"查看Wiki\",\"link\":\"/wiki.html\",\"type\":\"primary\"},{\"text\":\"加入我们\",\"link\":\"/join.html\",\"type\":\"secondary\"}],\"features\":[],\"footer\":\"QQ频道 SimpleWorld | QQ交流群 960431068 | Powered By VuePress\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"README.md\"}")
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
