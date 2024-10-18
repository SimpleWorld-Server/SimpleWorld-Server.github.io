import { defineClientConfig } from 'vuepress/client'
import Tabs from 'C:/Users/14488/Desktop/simple-world-wiki/simple-world-wiki/node_modules/vuepress-plugin-md-power/lib/client/components/Tabs.vue'
import CodeTabs from 'C:/Users/14488/Desktop/simple-world-wiki/simple-world-wiki/node_modules/vuepress-plugin-md-power/lib/client/components/CodeTabs.vue'
import Plot from 'C:/Users/14488/Desktop/simple-world-wiki/simple-world-wiki/node_modules/vuepress-plugin-md-power/lib/client/components/Plot.vue'
import FileTreeItem from 'C:/Users/14488/Desktop/simple-world-wiki/simple-world-wiki/node_modules/vuepress-plugin-md-power/lib/client/components/FileTreeItem.vue'

export default defineClientConfig({
  enhance({ router, app }) {
    app.component('Tabs', Tabs)
    app.component('CodeTabs', CodeTabs)
    app.component('Plot', Plot)
    app.component('FileTreeItem', FileTreeItem)
  }
})
