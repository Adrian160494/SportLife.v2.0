var config = {
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist',
    },
    module:{
        loaders:[
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query:{
                    presets: ['env','es2015']
                }
            },
            {
                test: /\.scss$/,
                loader: ['css-loader','sass-loader']
            }
        ]
    }
};

module.exports  = config;