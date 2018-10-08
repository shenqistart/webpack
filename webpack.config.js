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
    module:{
        rules:[
            {
                test:/\.css$/,
                // 从右向左的引入css引用，内联样式查到页面中去
                use:[{
                    loader:'style-loader',
                // 就是将生成的style放到原有写的style之前
                    options:{
                        insertAt:'top'
                    }
                },'css-loader']
            },{
                test:/\.png|gif|svg$/,
                // 从右向左的引入css引用，内联样式查到页面中去html-withimg-loader
                // use:['file-loader']
                use:{
                    laoder:'file-loader',
                    options:{
                        outputpath:'image'
                    }
                }
            },{
                test:/\.html$/,
                // 从右向左的引入css引用，内联样式查到页面中去
                use:'html-withimg-loader'
            }
        ]
    },
    plugins:[
        // 插件都是实例
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            filename:'index.html'
        })

    ]   
}
