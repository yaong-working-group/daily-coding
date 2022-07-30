const LSCS2 = function (arr) {
  let subArrSum = arr[0];
  let max = arr[0]; // 정답의 후보를 저장
  for (let i = 1; i < arr.length; i++) {
    subArrSum = Math.max(subArrSum + arr[i], arr[i]);
    max = Math.max(max, subArrSum);
  }

  return max;
};

let output = LSCS2([-1, 2, 3, 5, -6, 5]);
console.log(output); // --> 6

/* 
========== LSCS =============

!! 접근법 
1. 모든 부분 집합 배열을 구한 다음에 각 배열 합을 구해서 최댓값을 리턴

TEST
문법 오류가 있습니다. 코드를 다시한번 확인해주세요.
Killed
npm ERR! Test failed.  See above for more details.

시간 복잡도가 너무 큰듯 ...
====================================
*/

// const LSCS = function (arr) {
//   const result = [];
//   // 모든 부분 집합 배열을 구한다.
//   for (let i = 0; i < arr.length; i++) {
//     let temp = [];
//     for (let j = i; j < arr.length; j++) {
//       temp.push(arr[j]);
//       result.push([...temp]);
//     }
//   }
//   let answer = [];
//   // 구했던 모든 부분 집합 배열 합을 구해서 answer라는 배열에 넣어준다.
//   for (let el of result) {
//     answer.push(el.reduce((acc, cur) => acc + cur));
//   }
//   // 제일 큰 값을 리턴한다.
//   return Math.max(...answer);
// };
