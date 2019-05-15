## 文件模块
> 为啥每个方法都有同步、异步两个版本？

在`fs`模块中，提供同步方法是为了方便使用。

由于Node环境执行的JavaScript代码是服务器端代码，所以，绝大部分需要在服务器运行期反复执行业务逻辑的代码，`必须使用异步代码`，否则，同步代码在执行时期，服务器将停止响应，因为JavaScript只有一个执行线程。

服务器启动时如果需要读取配置文件，或者结束时需要写入到状态文件时，可以使用同步代码，因为这些代码只在启动和结束时执行一次，不影响服务器正常运行时的异步执行。


### 文件读取
- fs.readFileSync 普通读取

`fs`其余方法也类似，同步的 `xxxSync` 直接返回值
```js
const fs = require('fs')
const content = fs.readFileSync('./test.txt', 'utf-8')
```

异步的通过回调方式
```js
const fs = require('fs')

fs.readFile('./test.txt', 'utf8', function(err, data){
  if(err){
    return console.error('读取文件出错: ' + err.message)
  }
  console.log('文件内容: ' + data)
})
```

v8.0.0后就可以使用 `await/async` 啦。
```es6
const fs = require('fs')

// promisify is a neat tool in the util module that transforms a callback function into a promise one
const { promisify } = require('util')
const writeFile = promisify(fs.writeFile)
const readFile = promisify(fs.readFile)

const writeAndRead = async () => {
  await writeFile('./test.txt', 'Hello World')
  const content = await readFile('./test.txt', 'utf8')

  return content
}

writeAndRead()
  .then(content => console.log(content)) // Hello World
```
- fs.文件流读取，适合大文件
```js
var fs = require('fs');
var readStream = fs.createReadStream('./fileForRead.txt', 'utf8');

readStream
    .on('data', function(chunk) {
        console.log('读取数据: ' + chunk);
    })
    .on('error', function(err){
        console.log('出错: ' + err.message);
    })
    .on('end', function(){  // 没有数据了
        console.log('没有数据了');
    })
    .on('close', function(){  // 已经关闭，不会再有事件抛出
        console.log('已经关闭');
    });
```

- 文件写入
备注：如果文件不存在，则创建文件；如果文件存在，则覆盖文件内容；

```js
var fs = require('fs')

fs.writeFile('./test.txt', 'hello world', 'utf8', function(err){
    if(err) throw err;
    console.log('文件写入成功')
})
```
