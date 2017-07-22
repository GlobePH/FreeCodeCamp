const path = require('path')

const config = {
  context: __dirname,
  devtool: 'cheap-eval-source-map',
  output: {
    path: path.join(__dirname, public),
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  devServer: {
    hot: true,
    publicPath: '/public/',
    historyApiFallback: true
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NamedModulesPlugin()]
}

module.exports = config
