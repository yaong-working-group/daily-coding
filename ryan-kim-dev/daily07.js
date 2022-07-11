// * BFS 트리 순회

let bfs = function (node) {
  let queue = [node]; // root(시작 노드)를 배열에 넣은 상태로 큐를 선언, 초기화.
  const visitedNodeValues = []; // 방문한 노드의 정보를 담을 배열 선언.

  while (queue.length > 0) {
    // 큐에 요소가 있는 한 반복문 실행
    // 주의: while (queue) {...} 안됨. !![] -> true 이므로.

    const currentNode = queue[0]; // 현재 노드
    queue.shift(); // Dequeue 시키기 (큐: 선입선출)

    visitedNodeValues.push(currentNode.value); // 현재 노드의 value를 방문한 노드의 value를 담는 배열에 추가

    currentNode.children.forEach(child => queue.push(child));
    // 다음에 방문한 노드들을 큐에 enqueue 한다. 선입선출이므로 push로 맨 뒤에 넣어야 함.
  }
  return visitedNodeValues;
};

// 이 아래 코드는 변경하지 않아도 됩니다. 자유롭게 참고하세요.
let Node = function (value) {
  this.value = value;
  this.children = [];
};

// 위 Node 객체로 구성되는 트리는 매우 단순한 형태의 트리입니다.
// membership check(중복 확인)를 따로 하지 않습니다.
Node.prototype.addChild = function (child) {
  this.children.push(child);
  return child;
};

// All Passed
// 입출력 예시
// let root = new Node(1);
// let rootChild1 = root.addChild(new Node(2));
// let rootChild2 = root.addChild(new Node(3));
// let leaf1 = rootChild1.addChild(new Node(4));
// let leaf2 = rootChild1.addChild(new Node(5));
// let output = dfs(root);
// console.log(output); // --> [1, 2, 4, 5, 3]

// leaf1.addChild(new Node(6));
// rootChild2.addChild(new Node(7));
// output = dfs(root);
// console.log(output); // --> [1, 2, 4, 6, 5, 3, 7]
