/* 화요일
========== binarySearch =============
오름차순 정렬된 정수의 배열(arr)과 정수(target)를 입력받아 target의 인덱스를 리턴해야 합니다.

!! 
1. 중앙값인덱스를 하나 선택하고 찿으려는 값과 중앙값이 같으면 중앙값 인덱스를 바로 리턴
2. 중앙값이 아닐경우 찿으려는 값이 중앙값보다 큰지 판별해야한다.
3. 찿으려는 값이 중앙인덱스보다 큰경우 -> 중앙값은 판별을 미리 한번 했기 때문에 start = mid + 1 
4. 찿으려는 값이 중앙인덱스보다 작은경우 -> 중앙값과 같은지 판별을 미리 한번 했기 때문에 end = mid - 1
5. start === end 같아지면 다 찿았는데 없는 경우기 때문에 반복문을 종료 후 -1 리턴
====================================

*/

const binarySearch = function (arr, target) {
  // 시작 인덱스와 , 끝 인덱스 설정
  let start = 0,
    end = arr.length - 1;

  // 반복문 돌면서 중앙값이랑 같은지 , 큰지 , 작은지 확인
  // 유동적으로 인덱스 값들을 계속 바꿔줌
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) return mid;

    if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  // 다 찿았는데 없는 경우 -1 리턴
  return -1;
};
