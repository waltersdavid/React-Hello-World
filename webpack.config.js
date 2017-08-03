const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: [
        './src/index.js',
        './src/styles/styles.css'
    ],
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
      loaders: [{
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
      ]
    },
    resolve: {
      extensions: ['.js','.jsx']
    },
    devServer: {
        contentBase: './dist',
        historyApiFallback: true
    }
};
