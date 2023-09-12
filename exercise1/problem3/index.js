function pentagonal(n) {
  return total_dots = 1 + 5 * (n - 1) * n / 2
}

console.log(pentagonal(1)) // 1
console.log(pentagonal(2)) // 6
console.log(pentagonal(3)) // 16
console.log(pentagonal(8)) // 141

module.exports = pentagonal;
