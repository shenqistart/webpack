const path=require('path');
// 引入自动生成html代码的插件
const HtmlWebpackPlugin=require('html-webpack-plugin');

module.exports={
    mode:'development',
    entry:'./src/index.js',
    output:{
        path:path.resolve('dist'),
        filename:'bundle.js'
    },
    // 编写完直接打包
    devServer:{
        port:8080,
        // 路径
        contentBase:path.resolve('dist'),
        // 压缩
        compress:true,
    },
    plugins:[
        // 插件都是实例
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            filename:'index.html'
        })

    ]   
}
