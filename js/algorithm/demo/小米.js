var arr = ['a','b','c','z','r','a','d']

// 不定义新变量，统计出现次数
function countTime(arr) {
  return arr.reduce((acc, curr, idx) => {
    acc[curr] = acc[curr] ? acc[curr] + 1 : 1
    return acc
  }, {})
}

countTime(arr)
