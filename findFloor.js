function findFloor(arr, val) {
  let num = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= val) {
      num = arr[i];
    }
  }
  return num;
}

module.exports = findFloor;
