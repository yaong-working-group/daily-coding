/* 
========== robotPath =============

// 그냥 내 맘대로 막 풀어서 그런지 , 결과가 내 생각대로 잘 안나옴 
// answer 배열을 만들어서 방문 여부까지 처리하면서 카운트 까지 올리도록 설정했는데 ,
// 뭔가 생각처럼 잘 안댐 접근법이 틀린건가 ... ?

TEST : 3개 통과 
====================================
*/

const robotPath = function (room, src, dst) {
  // TODO: 여기에 코드를 작성합니다.
  const answer = makeAnswerArr(room);
  const [x, y] = src;
  answer[x][y] = 1;
  const [dx, dy] = dst;
  const result = helper(room, src, dst, answer);
  return result[dx][dy] - 1;
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

function helper(room, src, dst, answer) {
  const [dsX, dsY] = dst;
  const [x, y] = src;
  const que = [];
  console.log('as', answer);
  console.log(x, y);
  if (x === dsX && y === dsY) return answer;
  // 상
  if (room[x - 1] !== undefined && room[x - 1][y] !== undefined) {
    if (answer[x - 1][y] === 0 && room[x - 1][y] === 0) {
      answer[x - 1][y] = answer[x][y] + 1;
      que.push([x - 1, y]);
    }
  }
  // 하
  if (room[x + 1] !== undefined && room[x + 1][y] !== undefined) {
    if (answer[x + 1][y] === 0 && room[x + 1][y] === 0) {
      answer[x + 1][y] = answer[x][y] + 1;
      que.push([x + 1, y]);
    }
  }
  // 우
  if (answer[x][y + 1] === 0 && room[x][y + 1] === 0) {
    answer[x][y + 1] = answer[x][y] + 1;
    que.push([x, y + 1]);
  }
  // 좌
  if (answer[x][y - 1] === 0 && room[x][y - 1] === 0) {
    answer[x][y - 1] = answer[x][y] + 1;
    que.push([x, y - 1]);
  }
  for (let i = 0; i < que.length; i++) {
    return helper(room, que[i], dst, answer);
  }
}

let room = [
  [0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [1, 0, 1, 1, 1, 0, 1],
  [0, 0, 1, 0, 0, 0, 1],
  [0, 0, 1, 0, 1, 1, 1],
  [0, 0, 1, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  ,
];
const src = [0, 3];
const dst = [7, 3];
let output = robotPath(room, src, dst);
console.log(output); // --> 8

// result
[
  [0, 0, 2, 1, 2, 3, 0],
  [0, 0, 0, 0, 3, 4, 0],
  [0, 0, 0, 5, 4, 5, 6],
  [0, 0, 0, 0, 0, 6, 0],
  [0, 0, 0, 9, 8, 7, 0],
  [0, 0, 0, 10, 0, 0, 0],
  [0, 0, 0, 11, 0, 0, 0],
  [0, 0, 0, 12, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
];
