const binarySearch = function (arr, target) {
  let start = 0; // start는 arr의 왼쪽 끝 index
  let end = arr.length - 1; // end는 arr의 오른쪽 끝 index이며 start와 end사이는 탐색 범위가 된다.
  while (start <= end) {
    let middle = Math.floor((end + start) / 2); // middle은 start와 end 범위의 중간점을 뜻한다.
    if (arr[middle] === target) {
      // 배열의 중간값과 target값이 같으면 해당 index값을 리턴.
      return middle;
    }
    if (target < arr[middle]) {
      end = middle - 1; // 중간값보다 target값이 작다면 중간값보다 큰 수는 더 이상 범위에 해당하지 않는다.
    } else {
      start = middle + 1; // 중간값보다 target값이 크다면 중간값보다 작은 수는 더 이상 범위에 해당하지 않는다.
    }
  }
  return -1;
  // start와 end값이 middle 값과 같음에도 중간값이 일치하지 않으면 -1을 리턴한다.
};
