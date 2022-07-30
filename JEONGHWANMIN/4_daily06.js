/* 
========== gossipProtocol =============

!! 접근법 
1. 최소 힙은 부모 노드가 자식 노드보다 무조건 작아야 한다.
2. Insert 될 때 마다 부모 노드랑 비교해서 자리를 바꾸는 연산을 해줘야한다.
3. remove를 해줄때는 첫번째 인덱스랑 마지막 인덱스를 바꾼 후 바뀐 첫번째 인덱스는 자식이랑 계속 비교하면서 
   스케일 다운을 해줘야 한다.

TEST : PASS

====================================
*/

function swap(idx1, idx2, arr) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

function getParentIdx(idx) {
  return Math.floor((idx - 1) / 2);
}

function insert(heap, item) {
  heap.push(item);
  // 배열 길이가 1보다 작다면 스케일 처리를 해줄 필요가 없다.
  if (heap.length > 1) {
    // push로 넣었기 때문에 현재 인덱스는 배열길이 -1 이다.
    let idx = heap.length - 1;
    // 부모 인덱스를  찿는 메서드를 사용해서 부모 인덱스를 찿아준다.
    let pIdx = getParentIdx(idx);
    // 최소 힙이기 때문에 부모인덱스가 가장 작은 값이 와야하므로 , 부모 요소랑 비교해서 더 작은 값이 있다면 그 값을 부모로 올려준다.
    while (heap[idx] < heap[pIdx]) {
      swap(idx, pIdx, heap);
      idx = pIdx;
      pIdx = getParentIdx(idx);
    }
  }

  return heap;
}

function removeRoot(heap) {
  // 자료구조 힙에서 맨 앞 자료구조를 빼면 맨 뒤 자료구조가 바꾸는 성질이 있기 때문에 그 성질을 이용해서 자리를 바꾸고 , 맨 뒷 값이 최솟값이므로 팝 해준다.
  swap(0, heap.length - 1, heap);
  let min = heap.pop();
  // 배열 길이가 1보다 작다면 스케일 처리를 해줄 필요가 없다.
  if (heap.length > 1) {
    // root에는 현재 자리가 바뀐 맨 마지막 인덱스 요소가 들어있다.
    // 이 요소는 제일 작다고 확인 할 수 없기 때문에 자식 요소들이랑 비교가 필요하다.
    let idx = 0;
    // 자식 요소 인덱스 구하기
    let leftIdx = idx * 2 + 1;
    let rightIdx = idx * 2 + 2;
    // 자식 요소 둘 중 하나가 현재 루트 값보다 크다면 현재 루트값을 아래로 내려줘야 한다.
    while (heap[idx] > heap[leftIdx] || heap[idx] > heap[rightIdx]) {
      // while문 안으로 들어 왔다는 것은 자식 요소 둘 중 하나가 현재 루트값보다 작다는 얘기다.
      // 누가 더 작은지 비교해서 더 작은 값을 root 값이랑 교환해준다.
      // 교환후에는 현재 인덱스를 교환한 값에 인덱스를 넣어준다.
      if (heap[leftIdx] > heap[rightIdx]) {
        swap(idx, rightIdx, heap);
        idx = rightIdx;
      } else {
        swap(idx, leftIdx, heap);
        idx = leftIdx;
      }
      // 바뀐 인덱스의 자식 인덱스를 다시 구해준다.
      leftIdx = idx * 2 + 1;
      rightIdx = idx * 2 + 2;
    }
  }
  return min;
}

// 아래 코드는 수정하지 마세요.
const binaryHeap = function (arr) {
  return arr.reduce((heap, item) => {
    return insert(heap, item);
  }, []);
};

const heapSort = function (arr) {
  let minHeap = binaryHeap(arr);
  let result = [];
  let len = minHeap.length;
  // removeRoot 메서드는 제일 작은 값을 리턴해주기 때문에 전체 배열 길이만큼 반복문을 돌면서 작은 값들을 result 배열에 차곡차곡 쌓아준다.
  for (let i = 0; i < len; i++) {
    result.push(removeRoot(minHeap));
  }
  // result배열은 이제 제일 작은 값들 기준으로 오름차순 정렬이 되었기 때문에 그대로 리턴해준다.
  return result;
};

let output = heapSort([5, 4, 3, 2, 1]);
console.log(output); // --> [1, 2, 3, 4, 5]

output = heapSort([3, 1, 21]);
console.log(output); // --> [1, 3, 21]

output = heapSort([4, 10, 3, 5, 1]);
console.log(output); // --> [1, 3, 4, 5, 10]
