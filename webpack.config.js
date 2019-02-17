/* eslint-env node */
const webpack = require(`webpack`);
const HtmlWebpackPlugin = require(`html-webpack-plugin`);
const MiniCssExtractPlugin = require(`mini-css-extract-plugin`);

const {
  HOT,
  NODE_ENV=`development`,
  SOURCE_MAP=false,
} = process.env;

const stats = {
  assets: false,
  children: false,
  chunks: false,
  modules: false,
  timings: true,
};

const webpackConfig = {
  mode: NODE_ENV,
  entry: {
    app: [`./src/index.js`],
  },
  output: {
    filename: `[name].bundle.js`,
  },
  module: {
    rules: [
      {
        test: /\.styl$/,
        exclude: /node_modules/,
        use: [
          {
            loader: `css-hot-loader`,
          },
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: `css-loader`,
            options: {sourceMap: !!SOURCE_MAP},
          },
          {
            loader: `stylus-loader`,
            options: {sourceMap: !!SOURCE_MAP},
          },
        ],
      },
      {
        test: /\.jade$/,
        exclude: /node_modules/,
        use: [
          {
            loader: `panel/hot/template-loader`,
            options: {hot: !!HOT},
          },
          {
            loader: `virtual-jade-loader`,
            options: {
              vdom: `snabbdom`,
              runtime: `var h = require("panel").h;`,
              pretty: false,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({template: `index.template.html`, inject: `body`}),
    new MiniCssExtractPlugin({filename: `[name].bundle.css`, chunkFilename: `[id].css`}),
  ],
  devtool: SOURCE_MAP,
  devServer: {
    compress: true,
    inline: !!HOT,
    hot: !!HOT,
    port: 8001,
    publicPath: `/`,
    stats,
  },
  performance: {hints: false},
  stats,
};

if (HOT) {
  webpackConfig.entry.app.push(`webpack-dev-server-status-bar`);
  webpackConfig.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  );
}

module.exports = webpackConfig;
