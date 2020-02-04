// 判断是否为生产环境(production)，生产环境则BASE_URL为'iview-admin',开发环境则为'/'
// const BASE_URL = process.env.NODE_ENV === 'production' ? '/iview-admin/' : '/'

const path = require('path')

// 引入resolve方法用来加载路径
const resolve = dir => path.join(__dirname,dir)

module.exports = {
  lintOnSave: false,  // 取消每次保存时都进行eslint检测
  // baseUrl: BASE_URL,
  chainWebpack: config => {
    config.resolve.alias
      .set('@',resolve('src'))
      .set('_c',resolve('src/components'))
  },
  // 打包时不生成.map文件
  productionSourceMap:false,
  // 跨域配置： 它会告诉开发服务器将任何位置请求(没有匹配到静态文件的请求)都代理到设置的url来满足跨域需求
  devServer: {
    proxy: 'http://localhost:4000'
  }
}
