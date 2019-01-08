const { join } = require("path");
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const { ImageminWebpackPlugin } = require('imagemin-webpack');
const imageminGifsicle = require('imagemin-gifsicle');
const plugins = [imageminGifsicle()];

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: join(__dirname, 'dist'),
    publicPath: '/',
    filename: "[chunkhash].js"
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        test: /\.s?css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader"]
        })
      },
      {
        test: /\.(svg|png|jpe?g|svg|gif|eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "image/[hash:8].[name].[ext]"
            }
          }
        ]
      }
    ]
  },
  devtool: 'source-map',
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new ExtractTextPlugin({
      filename: "css/style.css",
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      template: "./index.html"
    })
  ],
  devServer: {
    contentBase: join(__dirname, "dist"),
    historyApiFallback: true
  }
}