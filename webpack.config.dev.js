import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  devtool: 'inline-source-map',

  entry: {
    'index': ['react-hot-loader/patch', 'webpack-hot-middleware/client?reload=true', path.resolve(__dirname, 'src/index.tsx')],
    'fabric01': ['react-hot-loader/patch', 'webpack-hot-middleware/client?reload=true', path.resolve(__dirname, 'src/components/Fabric01/fabric01')],
    'hello': ['react-hot-loader/patch', 'webpack-hot-middleware/client?reload=true', path.resolve(__dirname, 'src/components/helloWorld/helloPage')],
    'news': ['react-hot-loader/patch', 'webpack-hot-middleware/client?reload=true', path.resolve(__dirname, 'src/components/news/newsPage')],
  },

  target: 'web',
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: '[name].js'
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['.ts', '.tsx', '.js'] // note if using webpack 1 you'd also need a '' in the array as well
  },
  plugins: [
    //Set to debug mode.
    new webpack.LoaderOptionsPlugin({
      debug: true
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    // Create HTML file that includes reference to bundled JS.
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
      chunks: ['index'],
      inject: true
    }),
    new HtmlWebpackPlugin({
      template: 'src/components/Fabric01/fabric01.html',
      filename: 'fabric01.html',
      chunks: ['fabric01'],
      inject: true
    }),
    new HtmlWebpackPlugin({
      template: 'src/components/helloWorld/helloPage.html',
      filename: 'helloPage.html',
      chunks: ['hello'],
      inject: true
    }),
    new HtmlWebpackPlugin({
      template: 'src/components/news/newsPage.html',
      filename: 'newsPage.html',
      chunks: ['news'],
      inject: true
    }),

    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      { test: /\.ts$/, exclude: /node_modules/, loaders: ['react-hot-loader/webpack', 'awesome-typescript-loader'] },
      { test: /\.tsx$/, exclude: /node_modules/, loaders: ['react-hot-loader/webpack', 'awesome-typescript-loader'] },
      //{ test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader'] },
      { test: /\.css$/, loaders: ['style-loader', 'css-loader'] },
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"],
        exclude: path.resolve(__dirname, 'src/app')
      },
      {
        test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader?name=fonts/[name].[ext]'
      }
    ]
  }

};
