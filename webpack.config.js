var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');


var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: "./index.html",
    filename: './index.html',
    inject: 'body'

    }
)

module.exports = {
    entry : "./src/index.ts",
    output : {
        filename : "[name]-[chunkhash].js",
        path: path.resolve(__dirname, 'dist')
    },
    devtool : "source-map",
    resolve : {
        extensions : [".webpack.config.js","web.js",".ts",".tsx",".js",".jsx",".d.ts"]
    },
    module : {
        rules: [{
            test: /\.tsx?$/,
            loader: 'ts-loader'
        }]
    },
    plugins : [HtmlWebpackPluginConfig]



};