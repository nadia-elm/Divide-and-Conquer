function findRotationCount(arr) {
  //Basically find lowest number, and it's index. begining of array
  let numIdx = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[numIdx]) {
      return (numIdx = i);
    }
  }
  return numIdx;
}

module.exports = findRotationCount;
