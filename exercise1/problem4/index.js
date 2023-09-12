function makeTitleCase(s) {
  return s.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

console.log(makeTitleCase("This is a title")) // "This Is A Title"
console.log(makeTitleCase("capitalize every word")) // "Capitalize Every Word"
console.log(makeTitleCase("I Like Pizza")) // "I Like Pizza"
console.log(makeTitleCase("PIZZA PIZZA PIZZA")) // "PIZZA PIZZA PIZZA"

module.exports = makeTitleCase;
