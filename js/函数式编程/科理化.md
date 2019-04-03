## 《JavaScript函数式编程》

## [函数范式（functional paradigm）](https://llh911001.gitbooks.io/mostly-adequate-guide-chinese/content/)
[函数式编程](https://mp.weixin.qq.com/s/nF13kIYBzlXAllpzvUJoYg)
## 函数柯里化 - 用法有三


### 1. 降低适用范围，提高适用性

- 通用实现：

```javascript
function currying(fn) {
    var slice = Array.prototype.slice,
    __args = slice.call(arguments, 1);
    return function () {
        var __inargs = slice.call(arguments);
        return fn.apply(null__args.concat(__inarg);
    };
}
```
- 示例

```javascript
function Ajax() {
    this.xhr = new XMLHttpRequest();
}

Ajax.prototype.open = function(type, url, data, callback) {
    this.onload = function() {
        callback(this.xhr.responseText, this.xhr.status, this.xhr);
    }

    this.xhr.open(type, url, data.async);
    this.xhr.send(data.paras);
}

// mc - currying自动细分了函数
'get post'.split(' ').forEach(function(mt) {
    Ajax.prototype[mt] = currying(Ajax.prototype.open, mt);
});

var xhr = new Ajax();
xhr.get('/articles/list.php', {},
function(datas) {
    // done(datas)    
});

var xhr1 = new Ajax();
xhr1.post('/articles/add.php', {},
function(datas) {
    // done(datas)    
});
```
### 2. 延迟执行

```javascript
var curry = function(fn) {
    var _args = []
    return function cb() {
        if (arguments.length == 0) {
            return fn.apply(this, _args)
        }
        Array.prototype.push.apply(_args, arguments);
        return cb;
    }
}

// 类似：add(1)(2)(3)(4)();
```
### 3. 固定易变因素

柯里化特性决定了它这应用场景。提前把易变因素，传参固定下来，生成一个更明确的应用函数。最典型的代表应用，是bind函数用以固定this这个易变对象。
    
```javascript
Function.prototype.bind = function(context) {
    var _this = this,
    _args = Array.prototype.slice.call(arguments, 1);
    return function() {
        return _this.apply(context, _args.concat(Array.prototype.slice.call(arguments)))
    }
}
```
