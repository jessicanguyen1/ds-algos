// A palindrome is a word that is spelled the same backwards
// Ex: "racecar" is spelled the same backwards

function palindrome(str) {
  let reversed = "";

  for (let character of str) {
    reversed = character + reversed;
  }
  return reversed === str || false;
}

// console.log(palindrome("jess"));

module.exports = palindrome;
