function findRotatedIndex(arr, int) {
  let count = 0;
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === int) {
      return i;
      count++;
      index++;
    }
  }
  if (count > 0) {
    return index;
  } else {
    return -1;
  }
}

module.exports = findRotatedIndex;
