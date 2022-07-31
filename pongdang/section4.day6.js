function swap(idx1, idx2, arr) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

function getParentIdx(idx) {
  return Math.floor((idx - 1) / 2);
}

function insert(heap, item) {
  heap.push(item);

  let currentIndex = heap.length - 1;
  let parentNodeIndex = getParentIdx(currentIndex);

  while (heap[parentNodeIndex] > item) {
    swap(currentIndex, parentNodeIndex, heap);
    currentIndex = parentNodeIndex;
    parentNodeIndex = getParentIdx(currentIndex);
  }

  return heap;
}

function removeRoot(heap) {
  console.log(heap);
  // TODO: 여기에 코드를 작성합니다.
  // heap에 요소가 하나만 남으면 그냥 그 요소를 바로 반환한다.
  if (heap.length === 1) return heap.pop();

  // 지우는 요소는 heap의 0번째 인덱스 요소이다.
  const removed = heap[0];

  // shift, unshift로 구현하면 연산 속도가 오래 걸리나보다,,
  // swap 함수로 구현하니 잘 통과된다...
  // heap의 0번째 요소와 마지막 요소의 위치를 변경한다.
  swap(0, heap.length - 1, heap);
  // 마지막 요소가 된 0번째 요소는 필요가 없으니 pop() 해준다
  heap.pop();

  // 현재 인덱스
  let currentIndex = 0;
  // 노드의 왼쪽 인덱스
  let leftIndex = 1;
  // 노드의 오른쪽 인덱스
  let rightIndex = 2;

  // 현재 노드의 왼쪽 노드나 오른쪽 노드가 null (없으면) 이면 안 되고,
  // 현재 노드의 값이 왼쪽 노드의 값이나 오른쪽 노드의 값보다 작아야 한다.
  while (
    (!(heap[leftIndex] == null && heap[rightIndex] == null) && heap[currentIndex] > heap[leftIndex]) ||
    heap[currentIndex] > heap[rightIndex]
  ) {
    // 만약 현재 노드의 왼쪽 노드가 null(없거나) 이거나 왼쪽 노드의 값이 더 클 경우
    if (heap[leftIndex] == null || heap[leftIndex] >= heap[rightIndex]) {
      // 오른쪽 노드의 값과 현재 노드의 값의 위치를 변경해준다.
      swap(rightIndex, currentIndex, heap);
      // 둘의 위치가 바뀌어 부모가 된 노드의 위치부터 다시 정렬해야 하므로 현재 인덱스를 바뀐 노드의 값으로 재할당해주어야 한다.
      currentIndex = rightIndex;
    } else {
      // 현재 노드의 오른쪽 노드가 null(없거나) 이거나 오른쪽 노드의 값이 더 클 경우
      // 현재 노드의 왼쪽 노드의 값과 현재 노드의 값의 위치를 변경해준다.
      swap(leftIndex, currentIndex, heap);
      currentIndex = leftIndex;
    }

    // 현재 노드의 자식 노드로 이동
    leftIndex = currentIndex * 2 + 1;
    rightIndex = currentIndex * 2 + 2;
  }

  // heap 배열에서 가장 작은 요소 반환
  return removed;
}

const binaryHeap = function (arr) {
  return arr.reduce((heap, item) => {
    return insert(heap, item);
  }, []);
};

const heapSort = function (arr) {
  let minHeap = binaryHeap(arr);
  // 정렬된 요소들을 넣을 배열
  const sorted = [];
  // minHeap의 요소가 없을 때까지 while문을 실행
  while (minHeap.length > 0) {
    // removeRoot 함수에서 minHeap 배열에서 가장 작은 수를 반환해주면, sorted 배열에 넣음
    sorted.push(removeRoot(minHeap));
  }
  // 정렬된 배열 반환
  return sorted;
};

// let output = heapSort([5, 4, 3, 2, 1]);
// console.log(output); // --> [1, 2, 3, 4, 5]

// let output = heapSort([3, 1, 21]);
// console.log(output); // --> [1, 3, 21]

// output = heapSort([4, 10, 3, 5, 1]);
// console.log(output); // --> [1, 3, 4, 5, 10]

// 모든 테스트를 통과했습니다.
