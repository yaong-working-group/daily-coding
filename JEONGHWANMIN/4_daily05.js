/* 
========== ReferenceCode =============

!! 접근법 
힙 잘 모르겠어욤.. 
공부하고 오겠습니다.

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
  let curidx = heap.length - 1;
  let paidx = getParentIdx(curidx);
  while (paidx >= 0 && heap[curidx] > heap[paidx]) {
    swap(curidx, paidx, heap);
    curidx = paidx;
    paidx = getParentIdx(curidx);
  }
  return heap;
}

const binaryHeap = function (arr) {
  return arr.reduce((heap, item) => {
    return insert(heap, item);
  }, []);
};
