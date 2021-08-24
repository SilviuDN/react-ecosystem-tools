const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    // LOADERS:
    module: {
        rules: [
            // rule to transform ES6 in regular js
            {
                test: /\.(js|jsx)$/,    //matches all js, jsx files
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                options: {presets: ["@babel/env"]}
            },
            // the style-loader and css-loader lets us import the .css file at the top of a .js file
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    resolve: {extensions: ['*', '.js', '.jsx']},
    output: {
        path: path.resolve(__dirname, 'dist/'),
        publicPath: '/dist/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'public/'),
        port: 3000,
        publicPath: 'http://localhost:3000/dist/',
        hotOnly: true
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
};