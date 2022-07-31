const LSCS = function (arr) {
  // 합
  let sum = arr[0];
  // 첫 시작점
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    // 양수인 값을 계속 더하다가 음수를 더하게 되면 값이 작아진다.
    // 이때 다음 값이 음수를 더한 값보다 크면 음수를 더한 값을 버리는 게 더 큰 수를 만들 수 있다.
    sum = Math.max(sum + arr[i], arr[i]);
    // 큰 값과 계속 더해지는 값과 비교해서 큰 값을 max로 할당
    max = Math.max(max, sum);
  }

  return max;
};

// 모든 테스트를 통과했습니다.

// let output = SCS([1, 2, 3, -4, 5]);
// console.log(output); // --> 7 ([1, 2, 3, -4, 5])
