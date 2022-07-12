const binarySearch = function (arr, target) {
  // TODO : 여기에 코드를 작성합니다.
  //이진 탐색은 탐색할 범위를 축소해가며 원하는 값을 찾는 탐색 알고리즘
  //이진 탐색은 정렬된 배열에 대해서만 수행이 가능

  let left = 0; //left를 배열의 첫 인덱스
  let right = arr.length - 1; //그리고 right를 마지막 인덱스로 초기화해줍니다.

  while (left <= right) {
    let mid = Math.floor((left + right) / 2); // left와 right의 인덱스값을 이용하여 중간 인덱스값인 mid를 구해줍니다.
    if (target === arr[mid]) {
      // 탓겟과 배열의 중간값이 같으면 해당 인덱스 값을 리턴
      return mid;
    }
    if (arr[mid] > target) {
      right = mid - 1; // mid가 찾고자 하는 값보다 클경우 right의 인덱스값을 mid보다 1만큼 작게 하락 시켜 탐색 범위를 줄이고 중간값을 재 탐색 (left+right)/2
    } else {
      left = mid + 1; //  반대로 mid가 찾고자 하는 값보다 작을 경우 left의 값을 mid보다 1만큼 증가시키고 mid는 다시 중간 값을 찾는다 (left+right)/2
    }
  }
  return -1; //만약 while 문이 끝날 때까지 원하는 값을 찾지 못한다면 while 문을 빠져나와 -1을 반환하고(해당된 것이 없으면) 탐색을 종료.
};

let output = binarySearch([0, 1, 2, 3, 4, 5, 6], 2);
console.log(output); // --> 2
