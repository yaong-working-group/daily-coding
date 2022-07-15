function quickSort(arr, transform = (item) => item) {
  // arr 길이가 1개 or 0 일때는 arr 그대로 리턴한다.
  if (arr.length < 2) return arr;

  // 기준이 되는 수를 고른다. arr의 마지막 인덱스 값
  // pivot을 제외한 가장 왼쪽과 오른쪽 수를 비교한다.
  let pivot = [arr[arr.length - 1]];
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (pivot > arr[i]) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left, transform).concat(pivot, quickSort(right, transform));
}

// if, arr=[3,1,21,9,10] 일 때...

// 1번째
// pivot = [10]
// left = [3]
// right = []

// 2번째
// pivot = [10]
// left = [3,1]
// right = []

// 3번째
// pivot = [10]
// left = [3,1]
// right = [21]

// 4번째
// pivot = [10]
// left = [3,1,9]
// right = [21,10]
// 첫번째 left, right 그룹 완성

// 재귀 반복...
