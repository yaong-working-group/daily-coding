function radixSort(arr) {
  const negativeArr = arr.filter((x) => x < 0);
  const positiveArr = arr.filter((x) => x >= 0);

  return [...sortNegativeArr(negativeArr), ...sortPositiveArr(positiveArr)];
}

function sortNegativeArr(arr) {
  const absNegativeNumber = arr.map((x) => Math.abs(x));
  const negativeSortArr = sortPositiveArr(absNegativeNumber);

  return negativeSortArr.map((x) => x * -1).reverse();
}

function sortPositiveArr(arr) {
  if (arr.length === 0) {
    return [];
  }

  let radixArr = arr.slice();
  const maxLength = getMaxLengthOfArray(radixArr);

  for (let j = 0; j < maxLength; j++) {
    const newBucket = Array.from(Array(10), () => []);

    for (let i = 0; i < radixArr.length; i++) {
      const index = Math.floor((radixArr[i] / Math.pow(10, j)) % 10);
      newBucket[index].push(radixArr[i]);
    }

    radixArr = newBucket.flat();
  }

  return radixArr;
}

// e.g. [1, 2, 34] => 2
// e.g. [1, 23, 456] => 3
function getMaxLengthOfArray(arr) {
  const lengthCollection = arr.map((x) => String(x).length);

  return Math.max(...lengthCollection);
}
