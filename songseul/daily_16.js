const insertionSort = function (arr, transform = (item) => item) {
  let sorted = [arr[0]];
  //정렬된 배열을 일단 만들고 시작
  for (let i = 1; i < arr.length; i++) {
    //정렬 안 된 배열 순회시작
    if (transform(arr[i]) >= transform(sorted[i - 1])) {
      //정렬된 배열의 가장 오른쪽 값보다 탐색하는 요소가 크다면
      sorted.push(arr[i]); //그냥 바로 푸시
    } else {
      //정렬된 배열의 가장 오른쪽 값보다 탐색하는 요소가 크다면
      for (let j = 0; j < transform(sorted.length); j++) {
        //정렬된 배열 탐색시작
        if (transform(arr[i]) <= transform(sorted[j])) {
          //다른 경우는 모두 무시하고 정렬된 배열의 어느 요소보다 arr[i]작을 때!!
          const left = sorted.slice(0, j);
          const right = sorted.slice(j);
          sorted = left.concat(arr[i], right);
          //그 중간에 끼워넣기!!!
          break; //정렬되었으니까 바로 반복문 종류
        }
      }
    }
  }

  return sorted;
};
