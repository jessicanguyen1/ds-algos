/**
 * Max-Chars
 */

function maxChars(str) {
  let characterObj = {};
  let characterCounter = 0;
  let maxCharacter = "";

  //we created an obj with all the characters in there
  for (let character of str) {
    if (!characterObj[character]) {
      characterObj[character] = 1;
    } else {
      characterObj[character]++;
    }
  }

  for (let key in characterObj) {
    // as long as the key (char) is greater than the counter (set to 0), update the characterCounter to that key and set that key to maxCharacter
    if (characterObj[key] > characterCounter) {
      characterCounter = characterObj[key];
      maxCharacter = key;
    }
  }
  console.log(maxCharacter);
  return maxCharacter;
}

maxChars("yaaaaaaay");

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
