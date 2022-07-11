/* 
========== Reference Code =============
!! 접근법 
1. 각 앞자리에 올 수 있는 경우의 수를 다 구해야 한다. (factorial)
2. 각 경우의 수를 다 더한 값을 출력한다.
====================================
*/

// 나중에 경우의 수 구할 때 사용하는 팩토리얼 함수
function factorial(n) {
  if (n <= 1) {
    return n;
  }
  return n * factorial(n - 1);
}

function orderOfPresentation(N, K) {
  let result = 0;
  // 숫자를 사용한지 알기 위해서 여부 확인
  let visit = Array.from({ length: N + 1 }, (_, i) => false);

  // 각 숫자자리 하나하나 꺼내면서 방문여부 체크
  // 그 뽑은 숫자 앞자리 경우의 수를 팩토리얼 사용해서 확인
  for (let i = 0; i < N; i++) {
    // 첫번쨰 숫자를 뽑고 , visit[num] -> (숫자 확인용 배열) 부분을 true로 바꿔준다.
    let num = K[i];
    visit[num] = true;

    // 그 앞에 숫자를 사용 안했으면 , 그 경우의 수를 다 구해준다.
    let pre_visit = visit.slice(1, num);
    // false -> 사용 안한 숫자
    let validCnt = pre_visit.filter((el) => el !== true).length;
    // (앞에 나올 수 있는 숫자) x (뒤에 남은 숫자를 줄지어서 경우의 수를 다 구한다.)
    let count = validCnt * factorial(N - i - 1);
    // 나온 모든 경우의 수를 다 더해준다.
    result = result + count;
  }
  console.log(result);
  return result;
}

orderOfPresentation(3, [2, 1, 3]);
