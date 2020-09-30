import HtmlWebpackPlugin from 'html-webpack-plugin';
import { resolve } from 'path';
import { Configuration } from 'webpack';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

export default {
  entry: ['react-hot-loader/patch', './src/index.tsx'],
  output: {
    path: resolve(__dirname, '..', '..', '..', 'build/client'),
    filename: '[name].[contenthash].js',
    publicPath: '/',
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        loader: 'babel-loader',
        query: {
          plugins: ['relay'],
        },
        exclude: /node_modules/,
      },
      {
        test: /\.svg$/,
        use: 'file-loader',
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              mimetype: 'image/png',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
      '@gathering/client': '@gathering/client/src',
      '@gathering/core': '@gathering/core/src',
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: require('html-webpack-template'),
      appMountId: 'root',
      title: 'Gathering',
    }),
    new CleanWebpackPlugin(),
  ],
} as Configuration;
