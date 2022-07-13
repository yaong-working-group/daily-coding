/* 수요일
========== powerSet =============
하나의 집합을 의미하는 문자열을 입력받아 각 문자를 가지고 만들 수 있는 모든 부분집합을 리턴해야 합니다.

!! 
1. 문자로 만들 수 있는 모든 경우의 수를 나열해야 한다.
2. 완전탐색 알고리즘을 사용해서 모든 경우의 수를 구한다음 배열에 넣는다.

TEST : PASS
====================================
*/

const powerSet = function (str) {
  // 중복된 문자가 들어오면 중복을 제거하고 정렬한다.
  const set = new Set([...str]);
  let setArr = Array.from(set);
  str = setArr.sort().join('');

  let result = [];

  // |순서|
  // [] [c] [b] [b,c] [a] [a,c] [a,b] [a,b,c]
  function dfs(i, arr) {
    // 탈출 조건
    // 만약 문자열 길이랑 i 값이 같으면 배열에 문자를 집어넣고 탈출한다.
    if (i === str.length) {
      return result.push(arr);
    }

    /* Recursion Case */
    // 배열에 문자열이 포함 안된 경우
    dfs(i + 1, arr);
    // 배열에 문자열이 포함된 경우
    dfs(i + 1, [...arr, str[i]]);
  }

  // 0 부터 시작해서 시작해서 탐색을 시작한다.
  dfs(0, []);

  console.log(result);
  // 탐색이 끝난 배열을 정답 형식에 맞게 전처리 한다.
  let answer = [];
  for (let ar of result) {
    answer.push(ar.join(''));
  }

  // 전처리한 배열을 정렬해서 리턴한다.
  return answer.sort();
};

//
let output1 = powerSet('abc');
console.log(output1); // ['', 'a', 'ab', 'abc', 'ac', 'b', 'bc', 'c']
