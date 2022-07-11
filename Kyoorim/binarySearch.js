function search(arr, target) {
  // min과 max는 각각 array의 index를 가리킨다
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2); // 배열의 중간지점을 구한다
    let currentVal = arr[middle]; // 중간지점에 해당하는 요소의 값을 currentVal에 넣어준다

    if (currentVal < num) {
      min = middle + 1;
    } else if (currentVal > num) {
      max = middle - 1;
    } else {
      return middle; // if 와 else if에도 해당하지 않으면 답은 middle을 인덱스로 갖는 요소이기 때문
    }
  }
  return -1; // 위 경우에 모두 해당하지 않으면 배열에 존재하지 않은 요소이므로
}
