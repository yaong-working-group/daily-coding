const merge = function (left, right) {
  const sort = [];
  const leftList = left.slice();
  const rightList = right.slice();
  const size = leftList.length + rightList.length;

  for (let i = 0; i < size; i++) {
    if (leftList[0] <= rightList[0]) {
      sort.push(leftList[0]);
      leftList.shift();
    }
    if (leftList[0] > rightList[0]) {
      sort.push(rightList[0]);
      rightList.shift();
    }
  }

  const merged = [...sort, ...leftList, ...rightList];
  return merged;
};

const mergeSort = function (arr) {
  if (arr.length < 2) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  const merged = merge(left, right);
  return merged;
};

// let output = mergeSort([3, 1, 21]);
// console.log(output); // --> [1, 3, 21]
// 모든 테스트를 통과했습니다.
