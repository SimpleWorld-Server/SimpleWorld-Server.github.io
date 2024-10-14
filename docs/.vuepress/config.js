import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'zh-CN',

  title: 'SimpleWorld',
  description: '一款基于Towny的社会模拟服务器',

  theme: defaultTheme({
    logo: 'https://img.picui.cn/free/2024/10/14/670ce22f1adc8.png',
    // 默认主题配置
    navbar: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: 'Wiki',
        link: '/wiki',
      },
      {
        text: '加入我们',
        link: '/join',
      },
    ],
    sidebar: {
      '/wiki': 'heading'
    },
  }),

  bundler: viteBundler(),
})
