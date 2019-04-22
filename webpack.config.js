const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
module.exports = {
  entry:
    process.env.NODE_ENV === 'production' ? './src/main.js' : './dev/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: process.env.NODE_ENV === 'production' ? './' : '',
    library: 'vueModuleLoader',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  mode: process.env.NODE_ENV,
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@root': path.resolve(__dirname)
    },
    mainFiles: ['index'],
    extensions: ['.js', '.vue']
  },
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    () =>
      process.env.NODE_ENV === 'development' &&
      new HtmlWebpackPlugin({
        title: '加载中……',
        template: 'dev/index.html'
      })
  ]
}
