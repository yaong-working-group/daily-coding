function merge(left, right) {
  const sortedArr = [];
  while (left.length && right.length) {
    // left 나 right 둘 중 하나라도 빈배열이면 while문을 빠져나온다
    if (left[0] <= right[0]) {
      // left와 right의 0번째 인덱스 중 작은 요소를 sortedArr에 집어 넣는다. 같을 경우 뭘 집어넣든 상관없다
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }
  return [...sortedArr, ...left, ...right];
}

function mergeSort(arr) {
  if (arr.length === 1) return arr;
  const middle = Math.ceil(arr.length / 2);

  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}
