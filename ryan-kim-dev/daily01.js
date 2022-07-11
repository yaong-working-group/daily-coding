// * 최댓값, 최솟값 유형

// 정렬된 배열을 담는 변수 선언 : sort로 오름차순 정렬한 값으로 초기화
// 변수 1 - 양수 쪽 최댓값 3개(length에서 -1, -2, -3)
// 변수 2 - 음수 쪽 최댓값 2개, 양수 쪽 최댓값 1개(length에서 -1, 0, -1)
// Math.max(num1, num2, ...) : 인수 중 최댓값을 반환하는 메서드

const largestProductOfThree = function (arr) {
  const sorted = arr.sort((a, b) => a - b);
  const len = sorted.length;
  const right = sorted[len - 1] * sorted[len - 2] * sorted[len - 3];
  const left = sorted[len - 1] * sorted[0] * sorted[1];
  return Math.max(right, left);
};

// 입출력 예시
// let output = largestProductOfThree([2, 1, 3, 7]);
// console.log(output); // --> 42 (= 2 * 3 * 7)
// 모든 테스트를 통과했습니다.
