// Advanced 통과하지 못함
// const rangeMinimum = function (arr, ranges) {
//   const answer = [];
//   console.log(ranges.length);
//   for (let i = 0; i < ranges.length; i++) {
//     const sliceArr = arr.slice(ranges[i][0], ranges[i][1]);
//     answer.push(Math.min(...sliceArr));
//   }
//   return answer;
// };

// 테스트를 3번 돌리면 3번 중 한 번은 아래 오류가 뜸
// Killed
// npm ERR! Test failed.  See above for more details.
// 왜 그런거지?

const rangeMinimum = function (arr, ranges) {
  const node = createNode(arr, 0, arr.length - 1);

  // ranges는 여러 범위를 가진 배열
  // map으로 돌면서 하나씩 순회하도록 하게 함
  return ranges.map((range) => traverse(node, range));
};

// node를 만드는 함수
const createNode = (arr, start, end) => {
  // 배열의 시작점과 끝 점을 알기 위해서 이 함수의 인자로 start 와 end를 받음
  if (start === end) {
    return {
      value: arr[start],
      start,
      end,
    };
  }

  // 배열을 반으로 나누기
  const middle = parseInt((start + end) / 2);

  // 가운데를 중심으로 왼쪽 배열
  // 노드가 하나가 남을 때까지
  const left = createNode(arr, start, middle);

  // 가운데를 중심으로 오른쪽 배열
  // 노드가 하나가 남을 때까지
  // middle + 1인 이유는
  // 배열을 가운데를 중심으로 나누면 배열의 인덱스가 달라진다.
  // e.g.  [1,2,3,4,5,6,7,8]
  //    [1,2,3,4]   [5,6,7,8]
  // 'index 4' 에 있었던 '5'가 배열이 쪼개지면서 'index 0' 이 된다.
  // 원래 배열에서의 인덱스를 가져가기 위해 middle + 1을 시작점으로 한다.
  const right = createNode(arr, middle + 1, end);

  // 노드(객체)를 만든다.
  return {
    // 그 범위 안에서 가장 작은 값
    // 오른쪽 값과 왼쪽 값을 비교하는 이유는 노드의 최소값을 가장 아래에 있는 노드부터 비교하기 때문이다.

    // e.g.    [1,2,3,4] -> 1
    //   [1,2]-> 1     [3,4] -> 3
    // [1]  [2]      [3]  [4] -> 여기서부터 가장 작은 값 비교해서 다음 노드의 최소값을 정함
    value: Math.min(left.value, right.value),
    // 최소값을 갖는 노드 범위의 시작점
    start,
    // 최소값을 갖는 노드 범위의 끝점
    end,
    // 자식 노드
    left,
    right,
  };
};

// 만든 트리를 순회하는 함수
const traverse = (node, range) => {
  // 1. 구간이 트리에 포함된 경우
  if (node.start >= range[0] && range[1] >= node.end) {
    return node.value;
  }

  // 2. 구간이 트리에 포함되어 있지 않는 경우
  if (node.end < range[0] || range[1] < node.start) {
    return Number.MAX_SAFE_INTEGER;
  }

  // 3. 겹치는 경우
  return Math.min(traverse(node.left, range), traverse(node.right, range));
};

const arr = [1, 3, 2, 7, 9, 11];
const mins = rangeMinimum(arr, [
  [1, 4],
  [0, 3],
]);

console.log(mins); // --> [2, 1]
