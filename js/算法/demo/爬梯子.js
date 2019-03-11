function fabo(n) {
  if (n === 1) return 1
  return n + fabo(n-1)
}
fabo(20)
