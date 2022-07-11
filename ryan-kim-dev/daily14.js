// * 이진 탐색 기본 유형
// 시작, 중간, 끝 세개의 포인터를 변수화한다.
// 재할당시 시작 포인터가 커지거나 끝 포인터가 작아지기 때문에
// 시작 포인터가 끝 포인터와 같아지면 반복문을 종료해야 함.
// 타겟과 중간 포인터가 값이 같으면 중간 포인터의 인덱스를 리턴
// 타겟과 중간 포인터의 값을 비교해서 크거나 작은 경우 포인터 위치 변경

const binarySearch = function (arr, target) {
  // TODO : 여기에 코드를 작성합니다.
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((start + end) / 2);
  while (start <= end) {
    if (arr[mid] === target) return mid;
    if (arr[mid] > target) {
      end = mid - 1;
    }
    if (arr[mid] < target) {
      start = mid + 1;
    }
    mid = Math.floor((start + end) / 2);
  }
  return -1;
};

// All Passed
// 입출력 예시
let output = binarySearch([0, 1, 2, 3, 4, 5, 6], 2);
console.log(output); // --> 2

// output = binarySearch([4, 5, 6, 9], 100);
// console.log(output); // --> -1
