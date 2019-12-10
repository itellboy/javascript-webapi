module.exports = {
  base: '/',
  title: 'JavaScript Webapi',
  description: 'Love what you do, do what you love. :)',
  head: [
    ['link', { ref: 'icon', href: '/svg/js-cube.svg' }],
  ],
  host: '0.0.0.0',
  port: '8080',
  dest: 'docs/.vuepress/dist',
  cache: true,
  extraWatchFiles: [],
  markdown: {
    lineNumbers: true,
  },
  configureWebpack: (config, isServer) => { },
  evergreen: true,
  themeConfig: {
    sidebar: [
      ['/welcome', 'welcome'],
      {
        title: '文档对象模型(DOM)',
        children: [],
      }
    ],
  },
}