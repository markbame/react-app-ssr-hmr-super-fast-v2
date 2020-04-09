var path = require( 'path' )
const webpack = require( 'webpack' )
const BundleAnalyzerPlugin = require( 'webpack-bundle-analyzer' ).BundleAnalyzerPlugin
const CompressionPlugin = require( 'compression-webpack-plugin' )

module.exports = {
	mode   : 'production',
	entry  : './client/index.js',
	devtool: 'cheap-module-source-map',
	output : {
		filename: 'app.js',
		path    : path.resolve( __dirname, './public/javascripts/' )
	},
	resolve: {
		extensions: [ '.js', '.jsx' ],
		modules   : [
			path.resolve( __dirname, './' ),
			path.resolve( './node_modules' ),
		]
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
			},
			{
				test: /\.(jpe?g|gif|png|eot|svg|woff|woff2|ttf)$/,
				use : {
					loader: 'file-loader',
				}
			}
		]
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				commons: {
					test  : /[\\/]node_modules[\\/]/,
					name  : 'vendors',
					chunks: 'all'
				}
			}
		}
	},
	plugins: [
		new BundleAnalyzerPlugin(),
		new CompressionPlugin()
	]
}
