const path = require('path');
const webpack = require('webpack');
module.exports = {
  mode: 'development',
  entry: {
  	index: './src/pages/index/index.js',
  	about:'./src/pages/about/about.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  module: {
        rules: [{
            test: /\.scss$/,
            use: [
                "style-loader", // 将 JS 字符串生成为 style 节点
                "css-loader", // 将 CSS 转化成 CommonJS 模块
                "sass-loader" // 将 Sass 编译成 CSS，默认使用 Node Sass
            ]
        }]
    },
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components/'),
  	}
  },
  plugins: [],
  optimization: {
    splitChunks: {
      chunks: 'async',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]components[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  }
};