const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: ['./src/main.js', './src/main.css'],
    output: { path: __dirname + '/public', filename: 'bundle.js' },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    loader: 'css-loader!postcss-loader',
                }),
            }
        ],
    },
    devtool: 'source-map',
    devServer: {
        contentBase: 'public',
        port: 3300,
        host: "0.0.0.0"
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'bundle.css'
        }),
    ],
};