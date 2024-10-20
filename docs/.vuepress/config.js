import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'
// import { plumeConfig } from './plume.config'
import { defineNotesConfig } from 'vuepress-theme-plume'
import navbar from './navbar'
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
        { text: 'Wiki简介', link: '/notes/desc/' },
        { text: '游玩规则', link: '/notes/rule/' },
        { text: '四季系统', link: '/notes/season/' },
        { text: '小屋资源点', link: '/notes/house/' },
        { text: '更多合成', link: '/notes/craft/' },
        { text: '城镇规则', link: '/notes/town/' },
        { text: '战争玩法', link: '/notes/war/' },
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
    // notes: {
    //   link: '/notes/',
    //   dir: 'notes',
    //   notes: [
    //     {
    //       dir: 'desc',
    //       link: '/desc/',
    //       sidebar: 'auto'
    //     },
    //     {
    //       dir: 'house',
    //       link: '/house/',
    //       sidebar: 'auto'
    //     },
    //     {
    //       dir: 'end',
    //       link: '/notes/end/',
    //       sidebar: 'auto'
    //     },
    //     {
    //       dir: 'join',
    //       link: '/notes/join/',
    //       sidebar: 'auto'
    //     },
    //     {
    //       dir: 'rule',
    //       link: '/notes/rule/',
    //       sidebar: 'auto'
    //     },
    //     {
    //       dir: 'town',
    //       link: '/notes/town/',
    //       sidebar: 'auto'
    //     },
    //     {
    //       dir: 'war',
    //       link: '/notes/war/',
    //       sidebar: 'auto'
    //     },
    //     {
    //       dir: 'wiki',
    //       link: '/notes/wiki/',
    //       sidebar: 'auto'
    //     },
    //   ]
    // }
  }),
  bundler: viteBundler(),
})
