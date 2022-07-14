// * 삽입 정렬
// 이중 for문으로 2개의 포인터를 사용.
// 외부 for문 : 배열 길이만큼 순회
// 내부 for문 : i 이전 요소들을 순회하며 swap.
// 삽입 정렬은 배열의 2번째 요소부터 시작해서 해당 요소의 앞의 요소와 비교하며 swap한다.
// 내부 for문의 if 조건이 요소를 순서에 맞는 위치로 이동할때까지 swap하므로 정렬이 완료됨.
// 아닐 경우는 break하여 내부 for문 종료, 외부 for문의 i를 +1하여 다음 인덱스로 이동하고
// 다시 내부 for문으로 비교하며 swap.

// 1. 내 제출 (advanced 제외)
const insertionSort = function (arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      } else {
        break;
      }
    }
  }
  return arr;
};

// 2. 레퍼런스 코드
const insertionSort = function (arr, transform = item => item) {
  let sorted = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (transform(arr[i]) >= transform(sorted[i - 1])) {
      sorted.push(arr[i]);
    } else {
      for (let j = 0; j < i; j++) {
        if (transform(arr[i]) <= transform(sorted[j])) {
          const left = sorted.slice(0, j);
          const right = sorted.slice(j);
          sorted = left.concat(arr[i], right);
          break;
        }
      }
    }
  }

  return sorted;
};
