import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'
export default defineUserConfig({
  // 请不要忘记设置默认语言
  lang: 'zh-CN',
  title: 'SimpleWorld',
  theme: plumeTheme({
    head: [['link', { rel: 'icon', href: '/images/logo.png' }]],
    // more...
    logo: 'https://pic.imgdb.cn/item/67125cb1d29ded1a8cea11ce.jpg',
    autoFrontmatter: false,
    profile: {
      name: 'Simple World',
      description: '简单世界-社会模拟',
      avatar: 'https://pic.imgdb.cn/item/67125cb1d29ded1a8cea11ce.jpg',
      location: 'China',
      organization: 'SW',
      circle: true, // 是否为圆形头像
      layout: 'left', // 个人信息在左侧还是右侧，'left' | 'right'
    },
    plugins: {
      search: {
        // more options
        isSearchable: () => true
      }
    },
    navbar: [
      { text: '首页', link: '/' },
      { text: 'Wiki', link: '/notes/desc/' },
      { text: '加入我们', link: '/notes/join/' },
    ],
    sidebar: {
      '/': [
        { text: 'Wiki说明', link: '/notes/desc/' },
        { text: '账号绑定', link: '/notes/bind/'},
        { text: '游玩细则', link: '/notes/rule/' },
        { text: '系统商店', link: '/notes/shop/' },
        { text: '四季', link: '/notes/season/' },
        { text: '酿酒', link: '/notes/wine/' },
        { text: '地图', link: '/notes/map/' },
        { text: '称号系统', link: '/notes/tags/' },
        // { text: '小屋资源点', link: '/notes/house/' },
        { text: '更多合成', link: '/notes/craft/' },
        { text: '更多附魔', link: '/notes/enchants/' },
        { text: '城镇玩法', link: '/notes/town/' },
        { text: '战争玩法', link: '/notes/war/' },
        { text: '管理规章', link: '/notes/manage/'},
        { text: '结束语', link: '/notes/end/' },
      ]
    },
    configureWebpack: {
      resolve: {
        alias: {
          '@img': 'public/images'
        }
      }
    }
  }),
  bundler: viteBundler(),
})
