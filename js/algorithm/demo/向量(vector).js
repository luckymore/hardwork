const arr = [
  { start: 1, end: 3 },
  { start: 12, end: 13 },
  { start: 4, end: 6 },
  { start: 14, end: 22 },
  { start: 15, end: 23 },
  { start: 2, end: 7 }
]

function vector(arr) {
  const sortArr = arr.sort((a, b) => a.start - b.start)
  const result = []
  console.log(JSON.stringify(sortArr))

  for (let i = 0; i < sortArr.length - 1; i++) {
    const j = i + 1
    const a1 = sortArr[i].start,
      a2 = sortArr[i].end
    const b1 = sortArr[j].start,
      b2 = sortArr[j].end

    if (b1 <= a2) {
      sortArr[j] = { start: a1, end: a2 > b2 ? a2 : b2 }
      if (i === sortArr.length - 2) {
        result.push(sortArr[sortArr.length - 1])
      }
    } else {
      result.push(sortArr[i])
    }
  }
  console.log(JSON.stringify(sortArr))

  return result
}

console.log('----------\n', JSON.stringify(vector(arr)))
