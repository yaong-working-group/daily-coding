function merge(left, right) {
  // 병합하는 함수
  const sortedArr = [];
  while (left.length && right.length) {
    // 2개의 배열을 첫번째 인덱스부터 비교하여 더 작은값을 sortedArr로 push해준다.
    // 두 배열 중 length가 0이 될 때까지 반복한다.
    if (left[0] <= right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }
  // sortedArr배열에 남은 두 배열 값들을 더해준다.
  return [...sortedArr, ...left, ...right];
}

function mergeSort(arr) {
  // 분할하는 함수
  if (arr.length === 1) return arr;
  // 반으로 나누는 작업을 반복한다.
  const boundary = Math.ceil(arr.length / 2);
  const left = arr.slice(0, boundary);
  const right = arr.slice(boundary);

  return merge(mergeSort(left), mergeSort(right));
}
