 webpack中一切都是模块，而转化模块的工作就是由各种`loader`完成的。

## html 相关的
- `html-webpack-plugin`

## css 模块
- `css-loader`的作用是解析css源文件并获取其引用的资源，比如@import引用的模块、url()引用的图片等，然后根据Webpack配置编译这些资源。
- `style-loader`负责将css代码通过style标签插入html文档中，所以如果独立导出css文件就不再需要style-loader。css-loader必须在style-loader之前执行。

