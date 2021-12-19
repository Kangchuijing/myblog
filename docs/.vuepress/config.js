// .vuepress/config.js
module.exports = {
  lang: 'zh-CN',
  title: 'blueskang blog',
  description: 'record my daily code',
  theme: 'reco',
  serviceWorker: true, // 是否开启 PWA
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
      title: 'blueskang blog',
      description: 'record my daily code'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: '布鲁斯康的博客',
      description: '记录我的编码日常'
    }
  },
  themeConfig: {
    repo: 'myblog',
    noFoundPageByTencent: false,
    author: 'blues kang',
    logo: '/images/logo.png',
    locales: {
      '/': {
        selectText: 'Languages',
        label: 'English',
        editLinkText: 'Edit this page on GitHub',
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        category: {
          location: 2,     // 在导航栏菜单中所占的位置，默认2
          text: 'Category' // 默认文案 “分类”
        },
        tag: {
          location: 3,     // 在导航栏菜单中所占的位置，默认3
          text: 'Tag'      // 默认文案 “标签”
        },
        // 当前 locale 的 algolia studyearch 选项
        algolia: {},
        nav: [
          { text: 'Home', link: '/' },                      // 根路径
          { text: 'Guide', link: '/guide/' },
          { text: 'github', link: 'https://github.com/Kangchuijing' }, // 外部链接
          // 显示下拉列表
          // {
          //   text: 'Languages',
          //   items: [
          //     { text: 'Chinese', link: '/language/chinese' },
          //     { text: 'Japanese', link: '/language/japanese' }
          //   ]
          // },
          // 下拉列表显示分组
          {
            text: '高级',
            items: [
              { 
                text: '算法', 
                items: [
                  { text: '冒泡', link: '/language/chinese' },
                  { text: '快速', link: '/language/japanese' }
                ] 
              },
              { 
                text: '设计模式', 
                items: [
                  { text: '工厂', link: '/language/chinese' },
                  { text: '单例', link: '/language/chinese'},
                ] 
              },
            ]
          }
        ]
      },
      '/zh/': {
        // 多语言下拉菜单的标题
        selectText: '选择语言',
        // 该语言在下拉菜单中的标签
        label: '简体中文',
        // 编辑链接文字
        editLinkText: '在 GitHub 上编辑此页',
        // Service Worker 的配置
        serviceWorker: {
          updatePopup: {
            message: "发现新内容可用.",
            buttonText: "刷新"
          }
        },
        // 当前 locale 的 algolia studyearch 选项
        algolia: {},
        category: {
          location: 2,     // 在导航栏菜单中所占的位置，默认2
          text: 'Category' // 默认文案 “分类”
        },
        tag: {
          location: 3,     // 在导航栏菜单中所占的位置，默认3
          text: 'Tag'      // 默认文案 “标签”
        },
        nav: [
          { text: '首页', link: '/' },                      // 根路径
          { text: '指南', link: '/guide/' },
          { text: 'github', link: 'https://github.com/Kangchuijing' }, // 外部链接
          // 显示下拉列表
          // {
          //   text: 'Languages',
          //   items: [
          //     { text: 'Chinese', link: '/language/chinese' },
          //     { text: 'Japanese', link: '/language/japanese' }
          //   ]
          // },
          // 下拉列表显示分组
          {
            text: '高级',
            items: [
              { 
                text: '算法', 
                items: [
                  { text: '冒泡', link: '/language/chinese' },
                  { text: '快速', link: '/language/japanese' }
                ] 
              },
              { 
                text: '设计模式', 
                items: [
                  { text: '工厂', link: '/language/chinese' },
                  { text: '单例', link: '/language/chinese'},
                ] 
              },
            ]
          }
        ]
      }
    },
  }
}