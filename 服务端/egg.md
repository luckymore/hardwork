# egg学习路线

## 【官方文档】写的真特喵好，每一篇都是极好的理解后端知识的文章


## 看完文档，了解了基础，可以看下文章了解一下egg的全貌 
- [专访死马：为什么说Egg.js是企业级Node框架](https://zhuanlan.zhihu.com/p/36240171)


## 来看看实战应用！cnode社区的egg版 [egg-cnode](https://github.com/cnodejs/egg-cnode)




## 开发技巧

### 官方提供了应用代码的调试极其方便，那[test 代码本身，如何调试？](https://github.com/eggjs/egg/issues/839#issuecomment-299363969)

启动 test:
> npm run test-local -- --inspect-brk
launch.json 配置:
```
{
  "name": "Attach Test",
  "type": "node",
  "protocol": "inspector",
  "request": "attach",
  "timeout": 10000,
  "restart": true,
  "port": 9229
}
```
然后就可以进行各种断点调试，app 和 test 下断点都ok.
