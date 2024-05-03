const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ProvidePlugin } = require('webpack');

const NODE_ENV = process.env.NODE_ENV;

/** @type {import("@types/webpack").Configuration} */
module.exports = {
   mode: NODE_ENV === 'development' ? NODE_ENV : 'production',
   entry: './src/index.tsx',
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      clean: true,
   },
   module: {
      rules: [
         {
            test: /\.tsx?$/,
            use: ['babel-loader', 'ts-loader'],
         },
         {
            test: /\.css$/,
            use: ['style-loader', 'css-loader', 'postcss-loader'],
         },
         {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
         },
      ],
   },
   resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
   },
   plugins: [
      new HtmlWebpackPlugin({ template: './src/index.html' }),
      new ProvidePlugin({
         React: 'react',
      }),
   ],
};
