/* eslint-disable  */
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './scripts/index.ts',
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',   
          'sass-loader',  
        ],
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          configFile: 'tsconfig.json',
        }
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.scss'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname),
  },
  devtool: 'source-map',

};
