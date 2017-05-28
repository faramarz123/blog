module.exports = {
    devtool: 'eval',
    entry: "./app/App.js",
    output: {
        filename: "./public/bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ["babel-loader"],
            }
      ],
    },
};