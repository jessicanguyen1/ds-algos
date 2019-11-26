/**
 * Array chunking
 * 1. Create an empty array to hold chunks called "chunked"
 * 2. For each element in the "unchunked" array
 *    -> Retrieve the last element in "chunked" array
 *    -> IF last element does not exist, or if its length is equal to chunk size
 *          -> Push a new chunk into "chunked" with the current element
 *    -> ELSE add the current element into the chunk
 */

function arrayChunking(arr, size) {
  const chunked = [];

  for (let element of arr) {
    const last = chunked[chunked.length - 1];

    if (!last || last.length === size) {
      chunked.push([element]);
    } else {
      last.push(element);
    }
  }
  return chunked;
}

console.log(arrayChunking([1, 2, 3, 4, 5, 6], 3));

module.exports = arrayChunking;
