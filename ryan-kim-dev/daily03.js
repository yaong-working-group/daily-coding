// * 버블 정렬 유형

// 외부 for문: 배열 전체 순회
// 내부 for문: 요소 2개끼리 비교 & 정렬 완료된 뒷부분 반복에서 제외시키기 위해 -1 -i
// noSwap: 정렬이 일어나지 않으면 break시켜 불필요한 외부 for문 실행 종료.

const bubbleSort = function (arr) {
  let noSwap;
  for (let i = 0; i < arr.length; i++) {
    noSwap = true;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwap = false;
      }
    }
    if (noSwap) break;
  }
  return arr;
};

// All Passed
// 입출력 예시
// let output = bubbleSort([2, 1, 3]);
// console.log(output); // --> [1, 2, 3]
