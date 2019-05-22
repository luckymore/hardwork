# 读【[如何正确的学习Node.js](https://i5ting.github.io/How-to-learn-node-correctly/#103)】,中不太明白的地方

## Node.js简介
- 事件驱动（event-driven），非阻塞 I/O 模型（non-blocking I/O model），`简单点讲就是每个函数都是异步的`，最后由 Libuv 这个 C/C++ 编写的事件循环处理库来处理这些 I/O 操作，隐藏了非阻塞 I/O 的具体细节，简化并发编程模型，让你可以轻松的编写高性能的Web应用，所以它是轻量（lightweight）且高效（efficient）的

## 基础学习
- 从面向过程走过来的同学，推荐这种写法，简单易用。但要注意面向对象要有面向对象的写法，要理解抽象，继承，封装，多态4个基本特征。如果想用好，你甚至还需要看一些设计模式相关的书。好在有《JavaScript设计模式》一书。Koa2里已经在用这种写法了。

- 1）oh my zsh是我最习惯的shell，终端下非常好用
配合iterm2分屏 + spectacle全屏，几乎无敌

- 安装4个必备软件

brew install git 最流行的SCM源码版本控制软件
brew install wget 下载、扒站神器
brew install ack 搜索代码神器
brew install autojump 终端下多目录跳转神器

3）vim我虽然不算vim党，但也深爱着。janus是一个非常好用的vim集成开发环境。比如ctrl-p、nerdtree等插件都集成了，对我这种懒人足够了。

- 笔者推荐使用 Dash 或 Zeal 查看离线文档，经常查看离线文档，对Api理解会深入很多，比IDE辅助要好，可以有效避免离开IDE就不会写代码的窘境。

- 推荐学习资料

Node.js最新技术栈之Promise篇 https://cnodejs.org/topic/560dbc826a1ed28204a1e7de
理解 Promise 的工作原理 https://cnodejs.org/topic/569c8226adf526da2aeb23fd
Promise 迷你书 http://liubin.github.io/promises-book/
