const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const OpenBrowser = require('open-browser-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname,"./src/index.js"),
    output: {
        path: path.resolve(__dirname,"./my-dytt"),
        filename: "bundle.js"
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, './my-dytt'),
        host: "0.0.0.0",
        historyApiFallback: true,
        port: "7070",
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.js[x]?$/,
                use: ['babel-loader'],
                include: path.join(__dirname,'./src')
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192
                    }
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: path.resolve(__dirname,"./src/index.html")
        }),
        new webpack.HotModuleReplacementPlugin(),
        new OpenBrowser({
            url: 'http://localhost:7070'
        })
    ]
}