/**
 * Directions
 * Given a string, return a new string with the reversed order of characters
 * Examples:
 * reverse('apple') === 'leppa
 */

// first argument for reduce method will be a temporary variable that we initialize as an empty string
// second argument is our iterator [i]
function reverse(str) {
  return str
    .split("")
    .reduce((reversed, character) => character + reversed, "");
}

console.log(reverse("jessica"));

module.exports = reverse;

// function reverse(str) {
//     return str
//       .split("")
//       .reverse()
//       .join("");
//   }

// function reverse(str) {
//     let reversed = "";

//     for (let character of str) {
//       reversed = character + reversed;
//     }

//     return reversed;
//   }
