const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');

module.exports = () => {
  
  const env = dotenv.config().parsed;

  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});

  return({
    plugins: [
      new webpack.DefinePlugin(envKeys),
    ],
    entry: {
      main: './src/index.tsx'
    },
    module: {
      rules: [
        {
          test: /\.tsx$/,
          enforce: 'pre',
          loader: 'tslint-loader',
          include: path.resolve(__dirname, 'node_modules'),
          options: {
            typeCheck: true,
            emitErrors: true
          }
        },
        {
          test: /\.tsx?$/,
          loader: "awesome-typescript-loader",
          exclude: /node_modules/
        },
        {
          test: /\.css$/,
          use: [ 'style-loader', 'css-loader' ]
        },
      ]
    },
    devtool: 'inline-source-map',
    devServer: {
      contentBase: './dist',
      historyApiFallback: true
    },
    resolve: {
      extensions: [ '.tsx', '.ts', '.js', '.json' ]
    },
    output: {
      filename: '[name].bundle.js',
      path: path.join(__dirname, 'public'),
      publicPath: '/'
    },
    target: 'web',
  })
};