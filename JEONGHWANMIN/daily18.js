/* 
========== Merge Sort =============
!! 접근법 
1. 중앙값을 기준으로 좌우를 나눈다.
2. 중앙값을 기준으로 좌우 나눈 배열을 배열을 하나 남을때 까지 쪼개는 함수에 넣어준다.
3. 한개 남은 배열을 합치면서 위로 올라간다.

TEST : PASS
====================================
*/

const mergeSort = function (arr) {
  // 배열 길이가 1개 남으면 그 배열을 리턴해준다.
  if (arr.length <= 1) {
    return arr;
  }
  // 배열을 좌,우로 나누기 위해서 mid인덱스를 구해준다.
  const midIdx = Math.floor(arr.length / 2);
  // 각각 구해진 왼쪽 배열 , 오른쪽 배열을 재귀함수로 돌려준다.
  const left = mergeSort(arr.slice(0, midIdx));
  const right = mergeSort(arr.slice(midIdx));
  // 각각 정렬된 왼쪽 배열 , 오른쪽 배열을 합치면서 정렬을 반복한다.
  return combi(left, right);
};

const combi = (leftArr, rightArr) => {
  let result = [];
  let leftIdx = 0;
  let rightIdx = 0;
  // 왼쪽 오른쪽 배열을 비교하면서 빈 배열에 차례차례 정렬해 나간다.
  while (leftIdx < leftArr.length && rightIdx < rightArr.length) {
    if (leftArr[leftIdx] > rightArr[rightIdx]) {
      result.push(rightArr[rightIdx]);
      rightIdx++;
    } else {
      result.push(leftArr[leftIdx]);
      leftIdx++;
    }
  }
  // 위에서 정렬이 끝났는데도 배열이 남아있다면 , 나머지 짜투리 왼쪽 배열 요소를 result에 넣어준다.
  while (leftIdx < leftArr.length) {
    result.push(leftArr[leftIdx]);
    leftIdx++;
  }
  // 위에서 정렬이 끝났는데도 배열이 남아있다면 , 나머지 짜투리 오른쪽 배열 요소를 result에 넣어준다.
  while (rightIdx < rightArr.length) {
    result.push(rightArr[rightIdx]);
    rightIdx++;
  }
  // 정렬된 배열을 리턴해준다.
  return result;
};

let output = mergeSort([3, 1, 2, 5, 4]);
console.log(output);
