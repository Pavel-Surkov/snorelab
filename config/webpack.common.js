const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const defaults = require('@wordpress/scripts/config/webpack.config');

const paths = require('./paths');

module.exports = {
  // Where webpack looks to start building the bundle
  entry: [paths.src + '/index.js'],

  ...defaults,
  // Where webpack outputs the assets and bundles
  output: {
    path: paths.build,
    filename: '[name].bundle.js',
    publicPath: '/',
    assetModuleFilename: 'assets/static/[hash][ext][query]',
  },

  // Customize the webpack build process
  plugins: [
    // Removes/cleans build folders and unused assets when rebuilding
    new CleanWebpackPlugin(),

    // Copies files from target to destination folder
    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.public + '/images',
          to: 'assets/images',
          globOptions: {
            ignore: ['*.DS_Store'],
          },
          noErrorOnMissing: true,
        },
      ],
    }),

    // Generates an HTML file from a template
    // Generates deprecation warning: https://github.com/jantimon/html-webpack-plugin/issues/1501
    new HtmlWebpackPlugin({
      title: 'Snorelab',
      favicon: paths.src + '/images/favicon.png',
      template: paths.src + '/careers.html', // template file
      filename: 'careers.html', // output file
    }),
    new HtmlWebpackPlugin({
      title: 'Snorelab',
      favicon: paths.src + '/images/favicon.png',
      template: paths.src + '/terms.html', // template file
      filename: 'terms.html', // output file
    }),
    new HtmlWebpackPlugin({
      title: 'Snorelab',
      favicon: paths.src + '/images/favicon.png',
      template: paths.src + '/privacy.html', // template file
      filename: 'privacy.html', // output file
    }),
    new HtmlWebpackPlugin({
      title: 'Snorelab',
      favicon: paths.src + '/images/favicon.png',
      template: paths.src + '/about.html', // template file
      filename: 'about.html', // output file
    }),
    new HtmlWebpackPlugin({
      title: 'Snorelab',
      favicon: paths.src + '/images/favicon.png',
      template: paths.src + '/contact.html', // template file
      filename: 'contact.html', // output file
    }),
    new HtmlWebpackPlugin({
      title: 'Snorelab',
      favicon: paths.src + '/images/favicon.png',
      template: paths.src + '/faq.html', // template file
      filename: 'faq.html', // output file
    }),
    new HtmlWebpackPlugin({
      title: 'Snorelab',
      favicon: paths.src + '/images/favicon.png',
      template: paths.src + '/epworth.html', // template file
      filename: 'epworth.html', // output file
    }),
    new HtmlWebpackPlugin({
      title: 'Snorelab',
      favicon: paths.src + '/images/favicon.png',
      template: paths.src + '/stopbang.html', // template file
      filename: 'stopbang.html', // output file
    }),
    new HtmlWebpackPlugin({
      title: 'Snorelab',
      favicon: paths.src + '/images/favicon.png',
      template: paths.src + '/insight.html', // template file
      filename: 'insight.html', // output file
    }),
    new HtmlWebpackPlugin({
      title: 'Snorelab',
      favicon: paths.src + '/images/favicon.png',
      template: paths.src + '/insights.html', // template file
      filename: 'insights.html', // output file
    }),
    new HtmlWebpackPlugin({
      title: 'Snorelab',
      favicon: paths.src + '/images/favicon.png',
      template: paths.src + '/reviews.html', // template file
      filename: 'reviews.html', // output file
    }),
    new HtmlWebpackPlugin({
      title: 'Snorelab',
      favicon: paths.src + '/images/favicon.png',
      template: paths.src + '/howworks.html', // template file
      filename: 'howworks.html', // output file
    }),
    new HtmlWebpackPlugin({
      title: 'Snorelab',
      favicon: paths.src + '/images/favicon.png',
      template: paths.src + '/index.html', // template file
      filename: 'index.html', // output file
    }),
  ],

  // Determine how modules within the project are treated
  module: {
    rules: [
      // JavaScript: Use Babel to transpile JavaScript files
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },

      // Images: Copy image files to build folder
      {
        test: /\.(?:ico|gif|png|jpe?g|svg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svgo-loader',
          },
        ],
      },

      // Fonts and SVGs: Inline files
      { test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: 'asset/inline' },
    ],
  },

  resolve: {
    modules: [paths.src, 'node_modules'],
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': paths.src,
      assets: paths.public,
    },
  },
};
