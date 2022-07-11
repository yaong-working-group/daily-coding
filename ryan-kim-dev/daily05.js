// * DP 메모이제이션 유형

let tiling = function (n, memo = [undefined, 1, 2]) {
  // dp - memoization 사용
  // 처음 1개의 타일은 1가지 경우, 2개의 타일은 2가지 경우
  // 그 외 n개의 타일의 경우의 수 = n-1개의 경우의 수 + n - 2 개의 경우의 수.
  // 즉 피보나치 수열 공식과 동일함.
  // 풀이
  // 1. 하위 문제의 답을 저장할 memo 배열 선언 -> 매개변수에서 바로
  // 2. if n === 1 return 1 n === 2 return 2 -> 최초에 매개변수에서 memo 배열에 초기값으로 담아두어 연산 줄이기
  // 3. if (memo[n] !== undefined) return memo[n];
  // 4. let result = tiling(n - 1) + tiling(n - 2);
  // 5. memo[n] = result;
  // 6. return result;

  if (memo[n] !== undefined) return memo[n]; // 메모이제이션 배열에 값이 있으면 리턴 -> 아래 재귀 호출에서 하위문제를 푼 결과를 재사용
  let result = tiling(n - 1, memo) + tiling(n - 2, memo); // 두번째 인수로 메모이제이션 배열도 들어가야 함!!! 빼먹지 말기
  memo[n] = result; // n개의 경우의 수를 메모이제이션 배열의 n번째 요소에 저장
  return result;
};

// All Passed
// 입출력 예시
// let output = tiling(2);
// console.log(output); // --> 2

// output = tiling(4);
// console.log(output); // --> 5
