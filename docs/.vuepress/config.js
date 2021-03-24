const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}


module.exports = {
    title: "新宇摸鱼手册",
    description: "生命的意义不仅是活着，而是我们给别人的生命带来了何种不同。",
    base: '/', // 项目根路径
    dest: 'myApp', // 打包后的文件夹路径，为了方便，我把 dist 文件夹放到了根目录上
    // head 标签中的额外内容
    head: [
      ['link', { rel: 'shortcut icon', href: 'favicon.ico' }] // 这个是标签页 logo
    ],
    // 语言配置
    locales: {
      // 键名是该语言所属的子路径
      // 作为特例，默认语言可以使用 '/' 作为其路径。
      '/': {
        lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
      }
    },

    themeConfig: {
        // 顶部导航
        nav: [
            { text: '首页', link: '/' },
            { text: '知识库', link: '/repository/' },
            { text: '生活计划', link: '/life/' }
        ],
        
        // 侧边栏
        sidebar: {
            '/repository/': [
                {
                    title: '知识库',
                    collapsable: false,
                    sidebarDepth: 2,
                    children: [
                        '',
                        'source/source.md'
                    ]
                }
            ],
            '/life/': [
                {
                    title: '生活计划',
                    collapsable: false,
                    sidebarDepth: 2,
                    children: [
                        ''
                    ]
                }
            ],
            '/foo/': [
                {
                    title: '介绍详情',
                    collapsable: false,
                    sidebarDepth: 2,
                    children: [
                        ''
                    ]
                },
                {
                    title: '配置详情',
                    collapsable: false,
                    sidebarDepth: 2,
                    children: [
                        'one'
                    ]
                }
            ],
    
            '/bar/': [
                '',      /* /bar/ */
                'three', /* /bar/three.html */
                'four'   /* /bar/four.html */
            ],
    
            // fallback
            '/': [
                {
                    title: '主题',   // 必要的
                    // path: '/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                    collapsable: false, // 可选的, 默认值是 true,
                    sidebarDepth: 2,    // 可选的, 默认值是 1
                    children: [
                        '/'
                    ]
                },
                {
                    title: '介绍',
                    collapsable: false, // 可选的, 默认值是 true,
                    sidebarDepth: 2,    // 可选的, 默认值是 1
                    children: [ '/foo/' ],
                    initialOpenGroupIndex: -1
                }
            ]
        },
        // sidebar: [
        //     {
        //         title: '主题',   // 必要的
        //         // path: '/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        //         collapsable: false, // 可选的, 默认值是 true,
        //         sidebarDepth: 2,    // 可选的, 默认值是 1
        //         children: [
        //             '/'
        //         ]
        //     },
        //     {
        //         title: '介绍',
        //         collapsable: false, // 可选的, 默认值是 true,
        //         sidebarDepth: 2,    // 可选的, 默认值是 1
        //         children: [ '/foo/' ],
        //         initialOpenGroupIndex: -1
        //     }
        // ],
        sidebarDepth: 2, // 默认 1 提取到 h2，0 为禁用，2 为 h2，h3
        displayAllHeaders: false, // 默认值：false 侧边栏只会显示由当前活动页面的标题组成的链接
        activeHeaderLinks: true, // 默认值：true 滚动时通过 hash 高亮侧边栏标题
        // search: false, // 禁用搜索
        // algolia: {
        //     apiKey: 'BQYT1R63BT',
        //     indexName: 'my-app'
        // },
        lastUpdated: '最后更新时间', // 最后更新时间
        // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
        // nextLinks: false,
        // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
        // prevLinks: false,
        // Git 仓库和编辑链接
        repo: 'pengqiang324/my-component', // 你的仓库
        repoLabel: '远程地址', // 导航栏上的文本
        // 假如你的文档仓库和项目本身不在一个仓库：
        // docsRepo: 'pengqiang324/my-component',
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        docsBranch: 'main',
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: '编辑此页面'
    },

    markdown: {
        lineNumbers: false // 是否显示行号
    },

    configureWebpack: {
        resolve: {
            alias: {
                '@s': resolve('assets')  // 默认 .vuepress文件夹
            }
        }
    }    
  }