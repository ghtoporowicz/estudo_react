const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    
    //Indica a porta de entrada do webpack
    entry: './ex/index.js',
    output: {
        // e os arquivos de saida
        path: __dirname + '/public',
        filename: './bundle.js'
    },

    // Indica a porta de saida do servidor
    devServer: {
        port: 8080,
        contentBase: './public'
    },

    plugins: [
        new ExtractTextPlugin('app.css')
    ],

    //Tradução dos aquivos JS para ecma script utilizando o babel
    module: {
        loaders: [{
            test: /.js?$/,
            loader: 'babel-loader',
            // que ele ignore os arquivos que estão no nome_modules
            exclude: /node_modules/,
            query: {
                presets: ['es2015','react'] ,
                plugins: ['transform-object-rest-spread']
            }
        },
        {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader")
        }]
    }
}