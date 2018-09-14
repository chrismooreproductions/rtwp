const path = require('path')

module.exports = {
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
        test: /\.jsx?$/,
          exclude: /node_modules/,
          use: [
              {
                  loader: 'babel-loader',
                  options: {
                      presets: ['react'],
                  },
              },
          ],
			},
    ]
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js', '.json' ]
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  target: 'web'
};