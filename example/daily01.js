// 입출력 예시
// let output = largestProductOfThree([2, 1, 3, 7]);
// console.log(output); --> 42 (= 2 * 3 * 7)
// output = largestProductOfThree([-1, 2, -5, 7]);
// console.log(output); --> 35 (= -1 * -5 * 7)

const largestProductOfThree = function (arr) {
  // 3개의 요소를 곱하여 최댓값이 나올 수 있는 경우
  // 1. 가장 큰 수 세 개 곱하기
  // 2. (배열 안에 음수가 있을 경우) 가장 작은 수 두 개 (음수 * 음수)와 가장 큰 수 하나 곱하기
  // 1, 2 중에서 더 큰 값이 최댓값

  // sort 메서드는 원본 배열을 변화시키는 메서드이므로 원본 배열 복사
  const copyArr1 = arr.slice();
  // 배열의 요소를 오름차순으로 정렬
  copyArr1.sort((a, b) => a - b);

  // sort 메서드는 원본 배열을 변화시키는 메서드이므로 원본 배열 복사
  const copyArr2 = arr.slice();
  // 배열의 요소를 내림차순으로 정렬
  copyArr2.sort((a, b) => b - a);

  // 1. 가장 큰 수 세 개 곱하는 경우
  const max1 = copyArr2[0] * copyArr2[1] * copyArr2[2];
  // 2. 가장 작은 수 두 개 와 가장 큰 수 하나 곱하는 경우
  const max2 = copyArr1[0] * copyArr1[1] * copyArr1[arr.length - 1];

  // 1, 2 의 결괏값 중에 더 큰 값을 반환
  return Math.max(max1, max2);
};

// 모든 테스트를 통과했습니다.
