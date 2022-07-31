// binaryHeap 함수를 수정한 버전

// function swap(idx1, idx2, arr) {
//   [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
// }

// function getParentIdx(idx) {
//   return Math.floor(idx / 2);
// }

// function insert(heap, item) {
//   heap.push(item);

//   const currentIndex = heap.length - 1;
// const parentNodeIndex = Math.floor(currentIndex / 2);
//   const parentNodeIndex = getParentIdx(currentIndex);

//   while (parentNodeIndex !== 0 && heap[parentNodeIndex] < item) {
//     swap(currentIndex, parentNodeIndex, heap);
//   }

//   return heap;
// }

// 현재 들어온 요소의 부모 노드의 인덱스를 구할 때 Math.floor((idx-1) / 2) 라는 코드는 조금 이해하기 어려워서
// heap 배열의 0번째 요소를 null로 넣었다.
// 그러면  Math.floor(idx / 2) 이렇게 써도 된다.
// 그런 뒤 null이 있는 0번째 요소를 자른 후 반환하면 된다.
// 그러나 binaryHeap 함수는 변경하면 안 된다,,

// const binaryHeap = function (arr) {
//   const result = arr.reduce(
//     (heap, item) => {
//       return insert(heap, item);
//     },
//     [null]
//   );
//   return result.slice(1);
// };

// ---아래가 진짜---

// 아래 코드는 수정하지 마세요.
function swap(idx1, idx2, arr) {
  // 두 변수를 바꾸는 방법
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

// 부모 노드의 인덱스를 구하는 함수
function getParentIdx(idx) {
  return Math.floor((idx - 1) / 2);
}

function insert(heap, item) {
  // insert 함수가 호출될 때마다 heap 이라는 배열에 입력받은 arr 배열의 요소 하나씩 넣기
  heap.push(item);

  // 현재 들어온 요소의 인덱스 알아내기
  let currentIndex = heap.length - 1;

  // 현재 들어온 요소의 부모 노드의 인덱스 알아내기 -> 이유는 부모 노드의 값과 방금 들어온 요소의 값과 비교해서 값의 위치를 바꾸거나 가만히 있거나 해야 하니까
  let parentNodeIndex = getParentIdx(currentIndex);

  // 현재 들어온 요소의 값과 그 요소의 부모 노드의 값을 비교하여 부모 노드가 클 때까지 while문 돌기
  while (heap[parentNodeIndex] < heap[currentIndex]) {
    // 부모 노드의 값이 현재 들어온 값보다 작으면 swap 함수를 이용하여 위치를 바꾸어주기
    swap(currentIndex, parentNodeIndex, heap);
    // 값을 바꾸었기 때문에 다시 다 정렬해야 하기 때문에 현재 들어온 요소의 인덱스를 부모였던 요소의 인덱스로 변경한다.
    currentIndex = parentNodeIndex;
    // 부모의 부모와도 값을 비교해봐야 하기 때문에 또다시 부모의 인덱스 구하기
    parentNodeIndex = getParentIdx(currentIndex);
  }

  // 변경된 heap 배열 반환
  return heap;
}

// 아래 코드는 수정하지 마세요.
const binaryHeap = function (arr) {
  return arr.reduce((heap, item) => {
    return insert(heap, item);
  }, []);
};

console.log(binaryHeap([5, 4, 3, 2, 1]));
console.log(binaryHeap([3, 1, 21]));
// 모든 테스트를 통과했습니다.
