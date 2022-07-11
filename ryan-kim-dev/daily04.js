// * 부분집합 문제
// 객체 대신 Set 객체 활용해보기
// set 객체는 수학적 집합을 구현하기 위한 자료구조이다. 배열에서 중복된 요소를 제거하기 위해 흔히 사용된다.
// new 연산자와 함께 Set 생성자 함수 호출로 set 객체를 생성한다. 호출시 인수는 이터러블(배열, 유사배열)만 가능.

const isSubsetOf = function (base, sample) {
  // base와 sample을 하나의 배열로 만들어서 중복을 제거했을때
  // 원래 base의 길이와 같으면 부분집합이고
  // 원래 base의 길이와 다르면 부분집합이 아니다.
  const everyElements = [...base, ...sample];
  // 1. 중복 제거
  const eraseOverlap = [...new Set(everyElements)];
  // 2. 부분집합이 아니면 길이가 다름.
  if (eraseOverlap.length !== base.length) return false;
  return true;
};

// All Passed
// 입출력 예시
// let base = [1, 2, 3, 4, 5];
// let sample = [1, 3];
// let output = isSubsetOf(base, sample);
// console.log(output); // --> true

// sample = [6, 7];
// output = isSubsetOf(base, sample);
// console.log(output); // --> false

// base = [10, 99, 123, 7];
// sample = [11, 100, 99, 123];
// output = isSubsetOf(base, sample);
// console.log(output); // --> false
