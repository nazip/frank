const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: [
    'index.js'
  ],
  output: {
    path: path.join(process.cwd(), 'dist'),
    // publicPath: '/', //'/assets/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env', 'babel-preset-react']
          }
        }
      },
      {
        test: [/\.css$/],
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        use: [
          'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack-loader?bypassOnDebug&optipng: ' +
          '{optimizationLevel=7}&gifsicle: {interlaced=false}'
        ]
      },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        use: [
          {
            loader: 'url-loader?limit=100000'
          }
        ]
      }
    ]
  },
  resolve: {
    modules: [
      path.join(process.cwd(), 'src'),
      'node_modules'
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: './initializers/webpack/index_template.html'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: './dist',
    hot: true
  },
  devtool: 'inline-source-map'
};
