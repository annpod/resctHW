var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require ("extract-text-webpack-plugin");

module.exports = {
    entry: {
        app: path.join(__dirname, './src/app.js'),
        style: path.join(__dirname, './src/styles.css')
    },
    output:{
        filename: '[name].js',
        path: path.join(__dirname, 'build')
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.json','.html']
    },
    module:{
        rules: [
            {
                test: /\.html$/,
                loader: "html-loader"
            },
            {
            	test: /\.js$/,
                loaders: ['react-hot-loader', 'babel-loader']
            },

            {
               test: /\.css$/,
                use: ExtractTextPlugin.extract({
                  fallback: "style-loader",
                  use: "css-loader"
                })
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '/src/index.html'),
            filename: 'index.html'
        }),
        new ExtractTextPlugin("styles.css"),

    ],
    watch: true,
	devServer:{
		contentBase: path.join(__dirname, 'build'),
		compress: true,
    inline: true,
		port: 3000,
        inline: true
	}
}
