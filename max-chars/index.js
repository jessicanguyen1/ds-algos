/**
 * Max-Chars
 */

function maxChars(str) {
  let charObj = {};
  let max = 0;
  let maxChar = "";

  for (let char of str) {
    if (!charObj[char]) {
      charObj[char] = 1;
    } else {
      charObj[char]++;
    }
  }

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
