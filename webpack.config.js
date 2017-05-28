module.exports = {
    devtool: 'eval',
    entry: "./app/App.js",
    output: {
        filename: "bundle.js",
        path: __dirname + '/public'
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