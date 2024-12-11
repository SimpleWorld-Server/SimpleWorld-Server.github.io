export const redirects = JSON.parse("{\"/notes/desc/desc.html\":\"/notes/desc/\",\"/notes/end/end.html\":\"/notes/end/\",\"/notes/craft/craft-item.html\":\"/notes/craft/\",\"/notes/enchants/info.html\":\"/notes/enchants/\",\"/notes/join/join.html\":\"/notes/join/\",\"/notes/house/house.html\":\"/notes/house/\",\"/notes/rule/rule.html\":\"/notes/rule/\",\"/notes/season/info.html\":\"/notes/season/\",\"/notes/war/war.html\":\"/notes/war/\",\"/notes/town/town.html\":\"/notes/town/\",\"/notes/wiki/wiki.html\":\"/notes/wiki/\",\"/notes/wine/info.html\":\"/notes/wine/\"}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/14488/Desktop/simple-world-wiki/simple-world-wiki/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"首页"} }],
  ["/notes/desc/", { loader: () => import(/* webpackChunkName: "notes_desc_index.html" */"C:/Users/14488/Desktop/simple-world-wiki/simple-world-wiki/docs/.vuepress/.temp/pages/notes/desc/index.html.js"), meta: {"title":"介绍"} }],
  ["/notes/end/", { loader: () => import(/* webpackChunkName: "notes_end_index.html" */"C:/Users/14488/Desktop/simple-world-wiki/simple-world-wiki/docs/.vuepress/.temp/pages/notes/end/index.html.js"), meta: {"title":"结束"} }],
  ["/notes/craft/", { loader: () => import(/* webpackChunkName: "notes_craft_index.html" */"C:/Users/14488/Desktop/simple-world-wiki/simple-world-wiki/docs/.vuepress/.temp/pages/notes/craft/index.html.js"), meta: {"title":"更多合成"} }],
  ["/notes/enchants/", { loader: () => import(/* webpackChunkName: "notes_enchants_index.html" */"C:/Users/14488/Desktop/simple-world-wiki/simple-world-wiki/docs/.vuepress/.temp/pages/notes/enchants/index.html.js"), meta: {"title":"更多附魔"} }],
  ["/notes/join/", { loader: () => import(/* webpackChunkName: "notes_join_index.html" */"C:/Users/14488/Desktop/simple-world-wiki/simple-world-wiki/docs/.vuepress/.temp/pages/notes/join/index.html.js"), meta: {"title":"加入我们"} }],
  ["/notes/house/", { loader: () => import(/* webpackChunkName: "notes_house_index.html" */"C:/Users/14488/Desktop/simple-world-wiki/simple-world-wiki/docs/.vuepress/.temp/pages/notes/house/index.html.js"), meta: {"title":"小屋资源点"} }],
  ["/notes/rule/", { loader: () => import(/* webpackChunkName: "notes_rule_index.html" */"C:/Users/14488/Desktop/simple-world-wiki/simple-world-wiki/docs/.vuepress/.temp/pages/notes/rule/index.html.js"), meta: {"title":"规则"} }],
  ["/notes/season/", { loader: () => import(/* webpackChunkName: "notes_season_index.html" */"C:/Users/14488/Desktop/simple-world-wiki/simple-world-wiki/docs/.vuepress/.temp/pages/notes/season/index.html.js"), meta: {"title":"四季交替"} }],
  ["/notes/war/", { loader: () => import(/* webpackChunkName: "notes_war_index.html" */"C:/Users/14488/Desktop/simple-world-wiki/simple-world-wiki/docs/.vuepress/.temp/pages/notes/war/index.html.js"), meta: {"title":"战争玩法"} }],
  ["/notes/town/", { loader: () => import(/* webpackChunkName: "notes_town_index.html" */"C:/Users/14488/Desktop/simple-world-wiki/simple-world-wiki/docs/.vuepress/.temp/pages/notes/town/index.html.js"), meta: {"title":"城镇玩法"} }],
  ["/notes/wiki/", { loader: () => import(/* webpackChunkName: "notes_wiki_index.html" */"C:/Users/14488/Desktop/simple-world-wiki/simple-world-wiki/docs/.vuepress/.temp/pages/notes/wiki/index.html.js"), meta: {"title":"游玩须知"} }],
  ["/notes/wine/", { loader: () => import(/* webpackChunkName: "notes_wine_index.html" */"C:/Users/14488/Desktop/simple-world-wiki/simple-world-wiki/docs/.vuepress/.temp/pages/notes/wine/index.html.js"), meta: {"title":"酿酒"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/14488/Desktop/simple-world-wiki/simple-world-wiki/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/blog/", { loader: () => import(/* webpackChunkName: "blog_index.html" */"C:/Users/14488/Desktop/simple-world-wiki/simple-world-wiki/docs/.vuepress/.temp/pages/blog/index.html.js"), meta: {"title":"博客"} }],
  ["/blog/tags/", { loader: () => import(/* webpackChunkName: "blog_tags_index.html" */"C:/Users/14488/Desktop/simple-world-wiki/simple-world-wiki/docs/.vuepress/.temp/pages/blog/tags/index.html.js"), meta: {"title":"标签"} }],
  ["/blog/archives/", { loader: () => import(/* webpackChunkName: "blog_archives_index.html" */"C:/Users/14488/Desktop/simple-world-wiki/simple-world-wiki/docs/.vuepress/.temp/pages/blog/archives/index.html.js"), meta: {"title":"归档"} }],
  ["/blog/categories/", { loader: () => import(/* webpackChunkName: "blog_categories_index.html" */"C:/Users/14488/Desktop/simple-world-wiki/simple-world-wiki/docs/.vuepress/.temp/pages/blog/categories/index.html.js"), meta: {"title":"分类"} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
