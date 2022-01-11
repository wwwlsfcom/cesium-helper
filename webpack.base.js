module.exports = {
    resolve: {
        extensions: ['.js','.ts']
    }, module: {
        rules: [{
            test: /\.(js)$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            options: {presets: ['@babel/env']}
        }, {
            test: /\.ts$/i, loader: 'ts-loader', exclude: /node_modules/
        }, {
            test: /\.css$/, use: ['style-loader', 'css-loader']
        }, {
            test: /\.s[ac]ss$/i, use: [// 将 JS 字符串生成为 style 节点
                "style-loader", // 将 CSS 转化成 CommonJS 模块
                "css-loader", // 将 Sass 编译成 CSS
                "sass-loader",],
        }, {
            test: /\.(png|svg|jpg|jpeg|gif)$/i, type: 'asset/resource',
        }]
    }
};