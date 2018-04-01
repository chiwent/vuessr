const webpack = require('webpack')
const merge = require('webpack-merge')
const base = require('./webpack.base.config')
const nodeExternals = require('webpack-node-externals')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')

module.exports = merge(base, {
  // 这允许webpack以node使用方式处理动态导入
  // 并且还会在编译Vue组件时，告知`vue-loader`输送面向服务器代码
  target: 'node',
  devtool: '#source-map',
  entry: './src/entry-server.js',
  output: {
    filename: 'server-bundle.js',
    // 使用node风格导出模块
    libraryTarget: 'commonjs2'
  },
  // 外置化应用程序依赖模块，可以使服务器构建速度更快
  // 并生成较小的bundle文件
  externals: nodeExternals({
    // 不要外置化 webpack 需要处理的依赖模块
    whitelist: /\.css$/
  }),
  plugins: [
    // 设置全局变量
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.VUE_ENV': '"server"'
    }),
    // 这是将服务器的整个输出
    // 构建为单个 JSON 文件的插件。
    // 默认文件名为 `vue-ssr-server-bundle.json`
    new VueSSRServerPlugin()
  ]
})