//Dev mode HMR
const path = require( 'path' )
const HtmlWebpackPlugin = require( 'html-webpack-plugin' )
var webpack = require( 'webpack' )
module.exports = {
	mode   : 'development',
	entry  : './client/index.js',
	devtool: 'cheap-module-eval-source-map',
	name   : 'client',
	output : {
		pathinfo  : false,
		path      : path.resolve( 'dist' ),
		filename  : 'index_bundle.js',
  		publicPath: '/'
	},
	resolve: {
		alias: {
			client: path.resolve( __dirname, './client' )
		},
		symlinks        : false,
		cacheWithContext: false
	},
	devServer: {
		contentBase       : path.join( __dirname, './client' ),
		historyApiFallback: true,
		disableHostCheck  : true,
		compress          : true,
		inline            : true,
		port              : 3030,
		hot               : true
	},
	module: {
		rules: [
			{
				test   : /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use    : {
					loader : 'babel-loader',
					options: {
						presets: [ '@babel/preset-env' ]
					}
				}
			},
			{
				test: /\.less$/,
				use : {
					loader: 'style-loader!css-loader!less-loader',
				}
			},
			{
				test: /\.scss/,
				use : {
					loader: 'style-loader!css-loader!sass-loader',
				}
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin( {
		  title   : 'Dev Mode',
		  template: './client/index.html',
		  filename: 'index.html',
		  inject  : 'body'
		} )
	]
}
