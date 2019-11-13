/**
 * Integer Reversal
 * Ex: If 23 -> 32
 * If -103 -> -301
 */

function intReversal(num) {
  let temp = num.toString().split("");

  if (temp[temp.length - 1] == 0) {
    return false;
  } else {
    return (
      Math.sign(num) *
      parseInt(
        num
          .toString()
          .split("")
          .reverse()
          .join("")
      )
    );
  }
}

module.exports = intReversal;
