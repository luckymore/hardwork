/**
 * Promise
 * 考虑情况：
 *  1、构造函数内 resolve 是同步执行，还是异步
 *  2、resolve 传入我们的函数，我们调用 resolve(value)
 *     onFulfilled 传入Promise 中，resolve 和 then 调用，onFulfilled(value)
 */

class Promise {
  callbacks = []
  
  constructor(fn) {
    fn(this._resolve.bind(this))
  }

  then(onFulfilled) {
    this.callbacks.push(onFulfilled)
  }

  _resolve(v) {
    this.callbacks.forEach(cb => cb(v))
  }
}

//Promise应用
let p = new Promise(resolve => {
  setTimeout(() => {
    console.log('done')
    resolve('5秒')
  }, 2000)
})
  .then(tip => {
    console.log(tip)
    return
  })
  .then(res => console.log(res))

console.log(p)
