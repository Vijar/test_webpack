var webpack = require('webpack');

module.exports = {
    entry: "./app.js",
    output: {
        path: __dirname,
        filename: "client.js"
    },
    plugins: [
        new webpack.NormalModuleReplacementPlugin(/b\.server\.js$/, './modules/b.client.js')
    ]
};
