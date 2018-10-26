const webpack = require('webpack');

module.exports = {
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['babel-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        host: 'localhost',
        port: 3000,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],

    devtool: 'eval'
};