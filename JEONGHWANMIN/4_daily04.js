/* 
========== gossipProtocol =============

!! 접근법 
1. 상 하 좌 우 살피면서 소문이 퍼지는 지점을 큐에 넣어준다.
2. 이때 큐에 넣어져 있는 모든 지점이 퍼져야 1일차가 지난거기 때문에 큐가 다 비워진 뒤 Count를 올려준다.

TEST : PASS

====================================
*/

const createMatrix = (village) => {
  const matrix = [];
  village.forEach((line) => {
    const row = [];
    for (let i = 0; i < line.length; i++) row.push(line[i]);
    matrix.push(row);
  });
  return matrix;
};

//
const gossipProtocol = function (village, row, col) {
  let count = 0;
  // 정답 배열을 만들어준다.
  const answer = createMatrix(village);
  // 갈 수 있는 길 확인용 배열을 만들어준다.
  village = answer.slice();
  // 처음 배열에 좌표를 넣어준다.
  let que = [[row, col]];
  // 처음 시작점을 x로 표시해 준다.
  answer[row][col] = 'x';
  // 각각 상 하 좌 우 위치를 배열에 넣어서 편하게 쓸 수 있도록 해준다.
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  // 소문이 다 퍼질 때 까지 반복문이 실행된다.
  while (true) {
    let nQue = que.slice();
    // 각 1일차에는 que에 들어있는 모든 주민이 소문을 퍼트릴때 까지 기다려야 하기 때문에
    // 모든 주민이 소문을 다 퍼트릴 때 까지 반복문을 돌아준다.
    while (nQue.length) {
      const poped = nQue.pop();
      const [x, y] = poped;
      // 현재 좌표값에 상 하 좌 우 값을 더해준다.
      for (let i = 0; i < 4; i++) {
        const newX = x + dx[i];
        const newY = y + dy[i];
        // 더한 상하 좌우 값이 유효범위 안에 있고
        // 주민이 있는데 소문이 아직 퍼지지 않은 곳이라면 x로 표시해서 소문을 내준다.
        if (
          newX >= 0 &&
          newY >= 0 &&
          newX < village.length &&
          newY < village[0].length &&
          village[newX][newY] === '1' &&
          answer[newX][newY] !== 'x'
        ) {
          // 소문난 곳을 x로 표시
          answer[newX][newY] = 'x';
          // 주위에 있는 집들도 다음 날에 소문을 내기 위해서 큐에 넣어준다.
          que.push([newX, newY]);
        }
      }
    }
    // 큐에 들어있는 모든 주민이 소문을 퍼트렸기 때문에 카운트를 1 올려준다.
    count++;
    console.log(answer);
    console.log(count);
    if (isOver(answer)) break;
  }
  return count;
};

// 모든 소문이 났는지 확인하는 함수
function isOver(answer) {
  for (let row of answer) {
    if (row.includes('1')) {
      return false;
    }
  }
  return true;
}

// [
//   ['0', '1', '0', '1'],
//   ['0', '1', '1', '1'],
//   ['0', '1', '1', '0'],
//   ['0', '1', '0', '0'],
// ];
let village = [
  '1101', //
  '0111',
  '0001',
];
let row = 0;
let col = 0;
let output = gossipProtocol(village, row, col);
console.log(output); // --> 3
