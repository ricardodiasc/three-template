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
        filename : "bundle.js",
        path : "./dist/"
    },
    devtool : "source-map",
    resolve : {
        extensions : [".webpack.config.js","web.js",".ts",".tsx",".js",".jsx",".d.ts"]
    },
    module : {
        loaders : [
            {test : /\.ts?$/, loader : "ts-loader"}
        ]
    },
    plugins : [HtmlWebpackPluginConfig]



};