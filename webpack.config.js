/* eslint-env node */
const webpack = require(`webpack`);
const HtmlWebpackPlugin = require(`html-webpack-plugin`);

const {
  HOT,
  NODE_ENV=`development`,
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
        test: /\.jade$/,
        exclude: /(node_modules|mixpanel-common)/,
        use: [
          {
            loader: `panel/hot/template-loader`,
            options: {hot: !!HOT},
          },
          // BABEL_LOADER,
          {
            loader: `virtual-jade-loader`,
            options: {
              vdom: `snabbdom`,
              runtime: `var h = require("panel").h;`,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: `body`,
      template: `index.template.html`,
    }),
  ],
  devtool: false,
  devServer: {
    compress: true,
    inline: !!HOT,
    hot: !!HOT,
    port: 8088,
    publicPath: `/`,
    stats,
  },
  performance: {hints: false},
  stats,
  // resolveLoader: {
  //   root: path.join(__dirname, `node_modules`),
  // },
};

if (HOT) {
  webpackConfig.entry.app.push(`webpack-dev-server-status-bar`);
  webpackConfig.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  );
}

module.exports = webpackConfig;
