const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const paths = require('./paths');

module.exports = {
	// Where webpack looks to start building the bundle
	entry: [paths.src + '/index.js'],

	// Where webpack outputs the assets and bundles
	output: {
		path: paths.build,
		filename: '[name].bundle.js',
		publicPath: '/',
		assetModuleFilename: 'assets/static/[hash][ext][query]'
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
						ignore: ['*.DS_Store']
					},
					noErrorOnMissing: true
				}
			]
		}),

		// Generates an HTML file from a template
		// Generates deprecation warning: https://github.com/jantimon/html-webpack-plugin/issues/1501
		new HtmlWebpackPlugin({
			title: 'webpack Boilerplate',
			favicon: paths.src + '/images/favicon.png',
			template: paths.src + '/template.html', // template file
			filename: 'index.html' // output file
		})
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
						presets: ['@babel/preset-env', '@babel/preset-react']
					}
				}
			},

			// Images: Copy image files to build folder
			{
				test: /\.(?:ico|gif|png|jpe?g|svg)$/i,
				type: 'asset/resource'
			},
			// {
			// 	test: /\.(jpe?g|png|gif)$/i,
			// 	use: [
			// 		{
			// 			loader: 'url-loader',
			// 			options: {
			// 				// Images larger than 10 KB won’t be inlined
			// 				limit: 10 * 1024
			// 			}
			// 		}
			// 	]
			// },
			// {
			// 	test: /\.svg$/,
			// 	use: {
			// 		loader: 'svg-url-loader',
			// 		options: {
			// 			// Images larger than 10 KB won’t be inlined
			// 			limit: 10 * 1024,
			// 			// Remove quotes around the encoded URL –
			// 			// they’re rarely useful
			// 			noquotes: true
			// 		}
			// 	}
			// },
			// {
			// 	test: /\.(jpe?g|png|gif|svg)$/,
			// 	use: {
			// 		loader: 'image-webpack-loader'
			// 		// Specify enforce: 'pre' to apply the loader
			// 		// before url-loader/svg-url-loader
			// 		// and not duplicate it in rules with them
			// 	},
			// 	enforce: 'pre'
			// },

			// Fonts and SVGs: Inline files
			{ test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: 'asset/inline' }
		]
	},

	resolve: {
		modules: [paths.src, 'node_modules'],
		extensions: ['.js', '.jsx', '.json'],
		alias: {
			'@': paths.src,
			assets: paths.public
		}
	}
};
