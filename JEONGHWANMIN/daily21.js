/* 
========== robotPath =============

// 그냥 내 맘대로 막 풀어서 그런지 , 결과가 내 생각대로 잘 안나옴 
// answer 배열을 만들어서 방문 여부까지 처리하면서 카운트 까지 올리도록 설정했는데 ,
// 뭔가 생각처럼 잘 안댐 접근법이 틀린건가 ... ?

TEST : 3개 통과 
TEST : -> 코드 수정 후 PASS 
====================================
*/

const robotPath = function (room, src, dst) {
  // TODO: 여기에 코드를 작성합니다.
  const answer = makeAnswerArr(room);
  const [x, y] = src;
  answer[x][y] = 1;
  const check = [];
  check.push([x, y]);
  return helper(room, src, dst, answer, check) - 1;
};

function makeAnswerArr(room) {
  const answer = [];
  for (let j = 0; j < room.length; j++) {
    let temp = [];
    for (let i = 0; i < room[0].length; i++) {
      temp.push(0);
    }
    answer.push(temp);
  }
  return answer;
}

function helper(room, src, dst, answer, check) {
  if (check.length === 0) return;

  const poped = check.shift();
  const [x, y] = poped;
  const [dx, dy] = dst;
  // 좌표에 도달한 경우
  if (x === dx && y == dy) return answer[x][y];

  // 좌
  if (room[x][y - 1] === 0 && answer[x][y - 1] === 0) {
    answer[x][y - 1] = answer[x][y] + 1;
    check.push([x, y - 1]);
  }
  // 우
  if (room[x][y + 1] === 0 && answer[x][y + 1] === 0) {
    answer[x][y + 1] = answer[x][y] + 1;
    check.push([x, y + 1]);
  }
  // 상
  if (
    room[x - 1] !== undefined &&
    room[x - 1][y] === 0 &&
    answer[x - 1][y] === 0
  ) {
    answer[x - 1][y] = answer[x][y] + 1;
    check.push([x - 1, y]);
  }
  // 하
  if (
    room[x + 1] !== undefined &&
    room[x + 1][y] === 0 &&
    answer[x + 1][y] === 0
  ) {
    answer[x + 1][y] = answer[x][y] + 1;
    check.push([x + 1, y]);
  }

  return helper(room, src, dst, answer, check);
}

const room = [
  [0, 0, 0, 0, 0, 0],
  [0, 1, 1, 0, 1, 0],
  [0, 1, 0, 0, 0, 0],
  [0, 0, 1, 1, 1, 0],
  [1, 0, 0, 0, 0, 0],
];

[
  [8, 9, 0, 0, 0, 9],
  [7, 1, 1, 0, 1, 8],
  [6, 1, 0, 9, 8, 7],
  [5, 4, 1, 1, 1, 6],
  [1, 3, 2, 3, 4, 5],
];
const src = [4, 2];
const dst = [2, 2];
let output = robotPath(room, src, dst);
console.log(output); // --> 8
