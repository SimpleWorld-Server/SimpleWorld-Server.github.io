export const themeData = {"locales":{"/":{"selectLanguageName":"简体中文","selectLanguageText":"选择语言","appearanceText":"外观","lightModeSwitchTitle":"切换为浅色主题","darkModeSwitchTitle":"切换为深色主题","outlineLabel":"此页内容","returnToTopLabel":"返回顶部","editLinkText":"编辑此页","contributorsText":"贡献者","prevPageLabel":"上一页","nextPageLabel":"下一页","lastUpdated":{"text":"最后更新于"},"notFound":{"code":"404","title":"页面未找到","quote":"但是，如果你不改变方向，并且一直寻找，最终可能会到达你要去的地方。","linkText":"返回首页"},"encryptButtonText":"确认","encryptPlaceholder":"请输入密码","encryptGlobalText":"本站只允许密码访问","encryptPageText":"本页面只允许密码访问","footer":{"message":"Powered by <a target=\"_blank\" href=\"https://v2.vuepress.vuejs.org/\">VuePress</a> & <a target=\"_blank\" href=\"https://theme-plume.vuejs.press\">vuepress-theme-plume</a>"},"head":[["link",{"rel":"icon","href":"/images/logo.png"}]],"logo":"https://pic.imgdb.cn/item/67125cb1d29ded1a8cea11ce.jpg","profile":{"name":"Simple World","description":"简单世界-社会模拟","avatar":"https://pic.imgdb.cn/item/67125cb1d29ded1a8cea11ce.jpg","location":"China","organization":"SW","circle":true,"layout":"left"},"configureWebpack":{"resolve":{"alias":{"@img":"public/images"}}},"navbar":[{"text":"首页","link":"/"},{"text":"Wiki","link":"/notes/desc/"},{"text":"加入我们","link":"/notes/join/"}]}},"appearance":true,"blog":{"pagination":15,"postList":true,"tags":true,"archives":true,"categories":true,"link":"/blog/","tagsLink":"/blog/tags/","archivesLink":"/blog/archives/","categoriesLink":"/blog/categories/"},"navbarSocialInclude":["github","twitter","discord","facebook"],"aside":true,"outline":[2,3],"externalLinkIcon":true,"editLink":true,"contributors":true,"prevPage":true,"nextPage":true,"footer":{"message":"Power by <a target=\"_blank\" href=\"https://v2.vuepress.vuejs.org/\">VuePress</a> & <a target=\"_blank\" href=\"https://theme-plume.vuejs.press\">vuepress-theme-plume</a>"},"head":[["link",{"rel":"icon","href":"/images/logo.png"}]],"logo":"https://pic.imgdb.cn/item/67125cb1d29ded1a8cea11ce.jpg","profile":{"name":"Simple World","description":"简单世界-社会模拟","avatar":"https://pic.imgdb.cn/item/67125cb1d29ded1a8cea11ce.jpg","location":"China","organization":"SW","circle":true,"layout":"left"},"configureWebpack":{"resolve":{"alias":{"@img":"public/images"}}}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
