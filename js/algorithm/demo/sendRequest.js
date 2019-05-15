/**
 * 请实现如下函数，可以批量请求数据,所有的 url 地址在 urls 参数中，同时可以通过 max 参数控制请求的并发数，
 * 当所有请求结束之后，需要执行 callback 回调函数，发送请求的函数可以直接使用 fetch 即可
 * 【来源】https://juejin.im/post/5c8ded9be51d45365835345f
 */
function sendRequest(urls, max, callback) {
  let currentIndex = 0
  const result = []
  urls = urls.slice()
  
  // 使用 fetch 封装请求
  let getFetch = source => {
    return source.map(item => fetch(item).then(res => res.blob()))
  }
  let send = () => {
    //  判断有没有当前组
    const source = urls.splice(0, max)
    source.length &&
    Promise.all(getFetch(source))
      .then(body => {
        console.log(`第${++currentIndex}次批量请求成功`, body)
        
        result.push(...body)
        console.log(source.length)
        !urls.length && callback(result)
        send()
      })
      .catch((err) => {
        console.log('error')
      })
  }
  
  send()
}

const urls = [
  'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2580986389,1527418707&fm=27&gp=0.jpg',
  'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1995874357,4132437942&fm=27&gp=0.jpg',
  'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2640393967,721831803&fm=27&gp=0.jpg',
  'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1548525155,1032715394&fm=27&gp=0.jpg',
  'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2434600655,2612296260&fm=27&gp=0.jpg',
  'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2160840192,133594931&fm=27&gp=0.jpg'
]
const max = 4
const callback = result => {
  console.log('所有请求完成了', result)
}

sendRequest(urls, max, callback)
