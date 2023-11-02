function sortedFrequency(arr, num) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      count++;
    }
  }
  if (count > 0) {
    return count;
  } else {
    return -1;
  }
}

module.exports = sortedFrequency;
