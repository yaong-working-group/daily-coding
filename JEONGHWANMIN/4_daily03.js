/* 
========== LSCS =============

인터넷 접근 방법 참고...

====================================
*/
const LSCS = function (arr) {
  // 각각 현재 부분 수열의 부분합과 최댓값을 담아줄 변수 선언
  // Dp에 배열의 첫번 째 값 할당
  let dp = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    // 만약 이전 배열의 합이 현재 값보다 크다면 더했을 때 더 큰 값이 되기 때문에 dp[i] 값에 (그전 배열 연속된 값) + (현재 배열 값) 을 할당 해준다.
    if (dp[i - 1] + arr[i] > arr[i]) dp[i] = dp[i - 1] + arr[i];
    // 이전 배열의 합보다 현재 값이 더 크다면 이전 배열 값의 합이 음수일 것이기 때문에 그전 값은 버리고 현재 값으로 초기화 시켜준다.
    else dp[i] = arr[i];
  }
  // 각각 자리마다의 부분 배열의 합이 담겨 있을 거기 때문에 그중에서 제일 큰 값을 리턴해 주면 된다.
  return Math.max(...dp);
};

let output = LSCS2([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
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

const LSCS2 = function (arr) {
  const result = [];
  // 모든 부분 집합 배열을 구한다.
  for (let i = 0; i < arr.length; i++) {
    let temp = [];
    for (let j = i; j < arr.length; j++) {
      temp.push(arr[j]);
      result.push([...temp]);
    }
  }
  let answer = [];
  // 구했던 모든 부분 집합 배열 합을 구해서 answer라는 배열에 넣어준다.
  for (let el of result) {
    answer.push(el.reduce((acc, cur) => acc + cur));
  }
  // 제일 큰 값을 리턴한다.
  return Math.max(...answer);
};
