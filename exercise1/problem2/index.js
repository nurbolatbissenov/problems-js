function intWithinBounds(n, lower, upper) {
  const checkN = Number.isInteger(n) ? (n >= lower && n <= upper) : false;
    return checkN
}
console.log(intWithinBounds(3, 1, 9)) // true
console.log(intWithinBounds(6, 1, 6)) // false
console.log(intWithinBounds(4.5, 3, 8)) // false

module.exports = intWithinBounds;
