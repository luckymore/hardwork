/**
 * 采用key/value存储，复杂度为 O(n)
 */
var arr = [5,2,4,7,8,1,6], obj ={}
function findTwo(arr, num) {
  for (let i=0, len=arr.length; i<len; i++) {
    obj[num - arr[i]] = arr[i]
  }
  arr.forEach(v => {
	  obj[v] && console.log(v, obj[v])
  })
}

findTwo(arr, 11)
