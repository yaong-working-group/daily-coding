// * DP 메모이제이션 유형

function fibonacci(n, memo = [0, 1]) {
  if (memo[n] !== undefined) return memo[n]; // 피보나치 수열의 n번째의 값이 저장되어 있는 값이면 즉시 리턴시킴
  let result = fibonacci(n - 1, memo) + fibonacci(n - 2, memo); // recursive case
  memo[n] = result; // 모든 재귀 호출이 종료되고 정답을 배열의 n번째에 할당.
  return result;
}

// All Passed
// 입출력 예시
// let output = fibonacci(0);
// console.log(output); // --> 0

// output = fibonacci(1);
// console.log(output); // --> 1

// output = fibonacci(5);
// console.log(output); // --> 5

// output = fibonacci(9);
// console.log(output); // --> 34
