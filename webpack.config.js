var path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: ['react-hot-loader/patch', './src/index.js'],
  output: {
    path: path.resolve(__dirname, "./src/dist"),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                require('postcss-import'),
                require('postcss-cssnext'),
                require('postcss-hexrgba'),
                require('postcss-mixins'),
                require('postcss-simple-vars'),
                require('postcss-nested')
              ]
            }
          }
        ]
      },
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', ['es2015', {"modules": false}]]
        },
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
}
