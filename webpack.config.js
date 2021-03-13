const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const distPath = path.join(__dirname, 'dist');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    open: true,
    compress: true,
    port: 9000,
    host: 'localhost'
  },
  output: {
    filename: 'main.js',
    path: distPath,
    clean: true,
    assetModuleFilename: 'images/[name][ext]'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Simple Invoicing - Built with AngularJS',
      template: './index.html'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.jsx$/i,
        include: [
          path.resolve(__dirname, 'src/components')
        ],
        use: ['babel-loader']
      }
    ],
  }
};