const nav = require('./nav.js')
const valineConfig = require('./valineConfig.local.js')

module.exports = {
  GAID: 'UA-140255141-3',
  sidebar: 'auto',
  type: 'blog',
  noFoundPageByTencent: false,
  sidebarDepth: 1,
  author: '私塾学者',
  logo: '',
  nav,
  valineConfig,
  blogConfig: {
    category: {
      location: 2,
      text: "分类"
    },
    tag: {
      location: 3,
      text: "标签"
    }
  }
};