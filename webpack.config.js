// Following is required for Windows to avoid
// 'absolute path required' error
var path = require("path");
var app_path = "./app/index.js";
var build_path = "./build";

module.exports = {
    entry: [path.resolve(app_path)],
    output: {
        path: path.resolve(build_path),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        host: '0.0.0.0',
        port: 3500,
        contentBase: path.resolve(build_path),
        inline: true
    }
}
