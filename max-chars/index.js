/**
 * Max-Chars
 * 1. Declare an empty obj, string and variable that is set to 0
 * 2. Need a For Of loop to assign key/value to each character in your string
 * 3. Need a For In loop to iterate through the object and check which key value is greatest
 */

function maxChars(str) {
  let charObj = {};
  let max = 0;
  let maxChar = "";

  // Walk through every character of the string
  // If the character map doesn't have that key(character), assign it a key with the value of 1.
  // If the character map does already have the key(char), increment the value.

  for (let char of str) {
    if (!charObj[char]) {
      charObj[char] = 1;
    } else {
      charObj[char]++;
    }
  }

  // Walk through every key/property of the character object
  // Check if that current key/property's value is greater than max,
  // if it is, reassign max to that current keys' value
  // And also assign the maxChar to that current key

  for (let key in charObj) {
    if (charObj[key] > max) {
      max = charObj[key];
      maxChar = key;
    }
  }
  return maxChar;
}

console.log(maxChars("yayyyyyy"));

module.exports = maxChars;

// function maxChars(str) {
//     const charObj = {};
//     let max = 0;
//     let maxChar = "";

//     // creating a character map & assigning with 1 or incrementing the value
//     for (let char of str) {
//       if (!charObj[char]) {
//         charObj[char] = 1;
//       } else {
//         charObj[char]++;
//       }
//     }

//     // loop thru each key of the character map
//     for (let key in charObj) {
//       if (charObj[key] > max) {
//         max = charObj[key];
//         maxChar = key;
//       }
//     }
//     return maxChar;
//   }
