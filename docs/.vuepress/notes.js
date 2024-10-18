import { defineNotesConfig } from 'vuepress-theme-plume'

export default defineNotesConfig({
  // ...
  notes: {
    link: '/', dir: 'notes', notes: [
      {
        dir: 'desc',
        link: '/notes/desc/',
        sidebar: 'auto'
      },
      {
        dir: 'house',
        link: '/notes/house/',
        sidebar: 'auto'
      },
      {
        dir: 'end',
        link: '/notes/end/',
        sidebar: 'auto'
      },
      {
        dir: 'join',
        link: '/notes/join/',
        sidebar: 'auto'
      },
      {
        dir: 'rule',
        link: '/notes/rule/',
        sidebar: 'auto'
      },
      {
        dir: 'town',
        link: '/notes/town/',
        sidebar: 'auto'
      },
      {
        dir: 'war',
        link: '/notes/war/',
        sidebar: 'auto'
      },
      {
        dir: 'wiki',
        link: '/notes/wiki/',
        sidebar: 'auto'
      },
    ]
  },
})