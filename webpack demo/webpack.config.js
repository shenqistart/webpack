const path=require('path');
console.log(path,'路径');

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
    }
}
