/* 
========== rotateMatrix =============

으으악 이거 푸는날 아침에 퍼질러 자버려서 지금 올립니다 ㅠㅠ 
!! 접근법 
1. 배열을 90도 돌린다 !
 - 어떻게 돌리나 ? 각 배열을 타고 내려가면서 0번째 요소들만 모아서 새로운 배열을 만든다음 result라는 배열에 넣어준다.
 - 이때 마지막 요소부터 배열에 넣어줘야지 90도 회전이 가능하기 때문에 마지막 요소부터 넣어준다. 
2. 위 과정을 거치면 90도 회전이 되는데 , 위 과정을 ratation 번 돌면 그만큼 90도 회전이 되기때문에 rotation번 회전 시켜준다.

TEST : PASS
====================================
*/

const rotateMatrix = function (matrix, rotation = 1) {
  // 빈 배열이 들어올 경우 빈 배열을 리턴해 줍니다.
  if (matrix.length === 0) return [];
  // 새로 90도 돌린 배열을 모아주기 위해서 result라는 빈 배열을 생성해 줍니다.
  let result = [];
  // 90도 돌린 배열을 ratation번 회전시키기 위해서 90도 회전시키는 반복문을 감싸줍니다 !!
  for (let k = 0; k < rotation; k++) {
    // 배열 길이 만큼 반복문을 돌면서 각 요소의 0번째를 새로운 배열에 넣을 수 있도록 해줍니다 !!
    for (let i = 0; i < matrix[0].length; i++) {
      // 새로운 result 배열안에 2중 배열로 들어갈 temp라는 배열을 선언 해 줍니다.
      let temp = [];
      // 각 요소의 마지막 부터 0번째에 들어가야 90도 회전이 딱 맞게 되기 때문에 마지막 요소의 0번째 요소부터 모아줍니다!
      for (let j = matrix.length - 1; j >= 0; j--) {
        temp.push(matrix[j][i]);
      }
      // 각요소의 0번째 요소를 다 모았으면 그 배열을 result라는 배열안에 넣어줍니다.
      result.push(temp);
    }
    // 배열을 ratation번 회전시키기 위해서 기존 배열을 matrix라는 변수에 대입해줍니다.
    matrix = result.slice();
    // result 배열을 초기화 시키지 않으면 계속해서 배열에 요소가 쌓이기 때문에 쌓이지 않게끔 배열을 초기화 해줍니다!
    result = [];
  }

  // ratation번 회전한 배열을 리턴해 줍니다!
  return matrix;
};

const matrix = [
  [1, 2],
  [3, 4],
];
// console.log(matrix[0][0]); // --> 1
// console.log(matrix[3][2]); // --> 15

const rotatedMatrix = rotateMatrix(matrix, 1);
console.log(rotatedMatrix);
// console.log(rotatedMatrix[0][0]); // --> 13
// console.log(rotatedMatrix[3][2]); // --> 8
