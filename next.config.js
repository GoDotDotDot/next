// This file is not going through babel transformation.
// So, we write it in vanilla JS
// (But you could use ES2015 features supported by your Node.js version)
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  webpack: (config, { dev }) => {
    // Perform customizations to config
    // console.log(config)
    config.module.rules.push({
      test: /\.css$/,
    //   use: ['style-loader', 'css-loader']
      use: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader'})
    })
    config.module.rules.push({
      test: /\.less$/,
    //   use: ['style-loader', 'css-loader', 'less-loader']
      use: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'less-loader'})
    })
    config.plugins.push(new ExtractTextPlugin({filename: './static/css/[name].css', allChunks: true}))
    return config
  }
}
