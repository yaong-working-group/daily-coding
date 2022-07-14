const compare = function (a, b) {
  return a <= b;
};
const insertionSort = function (arr, callback = (x) => x) {
  for (let j = 0; j < arr.length; j++) {
    for (let i = j + 1; i < arr.length; i++) {
      if (compare(callback(arr[j]), callback(arr[i]))) {
        continue;
      } else if (!compare(callback(arr[j]), callback(arr[i]))) {
        const copyArr = arr.slice();
        arr.splice(i, 1);
        arr.splice(j, 0, copyArr[i]);
      }
    }
  }

  return arr;
};

// 입출력 예시
// let output = insertionSort([3, 1, 21]);
// console.log(output); // --> [1, 3, 21]

// 모든 테스트를 통과했습니다.
