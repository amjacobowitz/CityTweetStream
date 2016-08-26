var webpack = require('webpack');
var path = require('path');

var APP_DIR = path.resolve(__dirname, 'app');
var BUILD_DIR = path.resolve(__dirname, 'public');


var config = {
	entry: APP_DIR + '/components/Main.js',
	output: {
		path: BUILD_DIR,
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?/,
				include: APP_DIR,
				exclude: /node_modules/,
				loader: 'babel',
				query:
					{
						presets: ['react', 'es2015']
					}
			},
			{
				test: /\.json$/,
				loader: "json"
			},
			{
				test: /\.css$/,
				loader: "style-loader!css-loader"
			}
		]
	}
};

module.exports = config;