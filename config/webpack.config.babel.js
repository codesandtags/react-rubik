import path from "path";
import autoprefixer from "autoprefixer";
import webpack from "webpack";

export default {
  resolve: {
    extensions: ['*', '.js', '.jsx', '.json']
  },
  context: path.resolve(__dirname, '../src'),
  entry: [
    path.resolve(__dirname, '../src/index.js')
  ],
  target: 'web', // necessary per https://webpack.github.io/docs/testing.html#compile-and-test
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist'), // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/'
  },
  devServer: {
    contentBase: path.resolve(__dirname, '../src'),  // New
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: {presets: ['stage-1']}
        }],
      },
      {
        test: /\.eot(\?v=\d+.\d+.\d+)?$/,
        use: ['file-loader']
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: ['url-loader?limit=10000&mimetype=application/font-woff']
      },
      {
        test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/,
        use: ['url-loader?limit=10000&mimetype=application/octet-stream']
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: ['url-loader?limit=10000&mimetype=image/svg+xml']
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        use: ['file-loader?name=[name].[ext]']
      },
      {
        test: /\.ico$/,
        use: ['file-loader?name=[name].[ext]']
      },
      {
        test: /(\.css|\.scss|\.sass)$/,
        use: ['style-loader', 'css-loader?sourceMap', 'postcss-loader', 'sass-loader?sourceMap']
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: false,
      debug: true,
      noInfo: true, // set to false to see a list of every file being bundled.
      options: {
        sassLoader: {
          includePaths: [path.resolve(__dirname, 'src', 'scss')]
        },
        context: '/',
        postcss: () => [autoprefixer],
      }
    })
  ]
};