const path = require('path')
const mode = process.env.NODE_ENV || 'development'
const prod = mode === 'production'

module.exports = {
  entry: './src/main.js',
  mode,
  output: {
    path: prod ? __dirname + '/build' : __dirname,
    filename: './bundle.js',
    chunkFilename: './chunks/chunks[id].js'
  },
  devServer: {
    contentBase: __dirname
  },
  devtool: prod ? false : 'source-map'
}
