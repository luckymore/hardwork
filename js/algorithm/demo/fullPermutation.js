/**
 * 全排列
 */
const fulls = []
function fullPermutation(arr) {
  for (let item, i = 0, len = arr.length; i < len; i++) {
    item = arr.split(i, 1)[0]
    fulls.push(item)
    fullPermutation(arr)
  }
}

fullPermutation([1, 2, 3])
