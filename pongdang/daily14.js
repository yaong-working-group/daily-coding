const binarySearch = function (arr, target) {
  // arr의 중간에 있는 요소의 값을 구한다
  // 요소의 값과 target을 비교한다.
  // 1. 요소의 값 > target 일 경우
  // 1-1. 배열에 있는 중간 요소 이후의 요소들은 더 이상 쓸모없어짐
  // 1-2. 검사할 배열의 범위를 중간 요소 이전의 요소들로 줄인다.
  // 2. 요소의 값 < target 일 경우
  // 2-1. 배열에 있는 중간 요소 이전에 있는 요소들은 더 이상 쓸모없어짐
  // 2-2. 검사할 배열의 범위를 중간 요소 이후의 요소들로 줄인다.

  // 배열의 인덱스
  let left = 0;
  let right = arr.length - 1;

  // 배열의 인덱스가 한 곳에서 만날 때까지 while문 실행
  while (left <= right) {
    // 배열의 중간 지점 인덱스 구하기 (홀수일 경우 소수점이 나오기 때문에 Math.floor() 메서드를 이용하여 정수로 만들어준다.)
    let mid = Math.floor((left + right) / 2);

    // 배열의 중간 지점 인덱스의 값과 target이 같은 경우, 인덱스 반환
    if (arr[mid] === target) {
      return mid;
    }

    // 배열의 중간 지점 인덱스의 값보다 target이 작을 경우
    else if (arr[mid] > target) {
      // right는 mid를 중심으로 오른쪽
      // 오른쪽의 범위를 중간위치 - 1 까지로 줄인다.
      right = mid - 1;
    }

    // 배열의 중간 지점 인덱스의 값보다 target이 클 경우
    else if (arr[mid] < target) {
      // left는 mid를 중심으로 왼쪽
      // 왼쪽의 범위를 중간위치 + 1 까지로 줄인다.
      left = mid + 1;
    }
  }

  // while문을 다 돌고도 target과 같은 요소를 찾지 못했다면 -1 반환
  return -1;
};

// let output = binarySearch([0, 1, 2, 3, 4, 5, 6], 2);
// console.log(output); --> 2

// output = binarySearch([4, 5, 6, 9], 100);
// console.log(output);  --> -1

// 모든 테스트를 통과했습니다.

const binarySearch2 = function (arr, target) {
  // 처음에는,
  // arr 이라는 배열 안에 있는 요소들은 오름차순으로 정렬되었기 때문에
  // arr 배열의 맨 끝 요소보다 target이 크다거나
  // arr 배열의 첫 요소보다 targer이 작다면
  // 바로 -1 을 반환하는 코드를 작성했습니다.

  // 근데 별로 코드가 안 예뻐서 그냥 지웠어용 하하
  if (arr[arr.length - 1] < target) {
    return -1;
  }
  if (arr[0] > target) {
    return -1;
  }

  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] > target) {
      right = mid - 1;
    } else if (arr[mid] < target) {
      left = mid + 1;
    }
  }

  return -1;
};
