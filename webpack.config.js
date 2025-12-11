import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  entry: './src/index.js',
  output: {
    filename: 'bundle.[contenthash].js', // hashed filename
    path: path.resolve('./dist'),
    clean: true, // cleans old files on rebuild
  },
  module: {
    rules: [
      // JS (optional if using Babel)
      {
        test: /\.js$/,
        exclude: /node_modules/,
      },
      // CSS
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      // Images
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './dist/index.html', // your HTML template
    }),
  ],
  mode: 'development', // or 'production'
};
