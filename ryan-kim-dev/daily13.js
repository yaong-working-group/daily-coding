// * 팩토리얼, DFS
// 경우의 수: 요소 개수의 팩토리얼.
// [2,3,1] 의 경우의 수는 3! = 3 * 2* 1
// 모든 경우의 수를 다 계산해서 indexOf 하면 수많은 경우의 수를 다 탐색해야 함.
// 이 문제는 모든 경우의 수를 2차원 배열로 구해서 K의 인덱스를 찾는게 아니라 K의 각 1번째부터 마지막 인덱스의 요소들을 각 인덱스의 값인 숫자(조)가 고정되었을 때 나머지 조의 경우의 수를 answer에 전부 더한 값을 리턴하는 문제이다.

function orderOfPresentation(N, K) {
  function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
  }
  let answer = 0;
  const isChecked = new Array(N + 1).fill(false); // 방문처리할 배열. 0번째는 더미 데이터로.

  for (let i = 0; i < K.length; i++) {
    const cur = K[i];
    isChecked[cur] = true; // 방문처리.(이미 선택한 경우를 제외시키기)
    let checkNeeded = isChecked.slice(1, cur).filter(el => el === false).length;
    answer += checkNeeded * factorial(N - 1 - i); // 이미 구한 요소의 경우의 수를 제외하고 재귀호출하여 구한 경우의 수를 answer에 더함.
  }
  return answer;
}

// All Passed
// 입출력 예시
// let output = orderOfPresentation(3, [2, 3, 1]);
// console.log(output); // 3

// output = orderOfPresentation(5, [1, 3, 2, 4, 5])
// console.log(output); // 6
