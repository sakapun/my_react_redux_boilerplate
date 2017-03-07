module.exports = {
    entry: {
        js: './src/main.js'
    },
    output: { path: __dirname + '/public', filename: 'bundle.js' },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
        ],
    },
    devtool: 'source-map',
    devServer: {
        contentBase: 'public',
        port: 8080,
    }
};