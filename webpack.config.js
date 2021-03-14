const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const distPath = path.join(__dirname, 'dist');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devtool: 'inline-source-map',
  target: "web",
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
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.jsx$/,
        exclude: '/node_modules/',
        include: [
          path.resolve(__dirname, 'src/components')
        ],
        use: {
          loader: 'babel-loader',
          options: {
              presets: ['@babel/react', '@babel/env']
          }
        }
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      }
    ],
  }
};