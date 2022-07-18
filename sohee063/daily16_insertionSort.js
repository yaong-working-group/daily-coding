// arr의 첫번째 인덱스 값으로 초기 배열을 생성하고 비교를 시작한다.
// arr의 오른쪽 값과 왼쪽값을 비교하여 삽입할 위치를 정하고 splice 메서드로 삽입한다.
// 두번째 인자로 callback함수를 왜 사용하는지는 아직 이해가 안된다...

const insertionSort = function (arr, callback = (el) => el) {
  // TODO: 여기에 코드를 작성합니다.
  let result = [arr[0]]; // 값을 비교하기 위해 초기 배열 생성해준다. [3]
  for (let i = 1; i < arr.length; i++) {
    // 만약 arr의 오른쪽값이 왼쪽값보다 클 경우에는 푸시해준다.
    if (callback(arr[i]) > callback(result[i - 1])) {
      result.push(arr[i]);
    } else {
      // 만약 아닐경우에는
      for (let j = 0; j < result.length; j++) {
        if (callback(arr[i]) <= callback(result[j])) {
          // let left = result.slice(0, j);
          // let right = result.slice(j);
          // result = left.concat(arr[i], right);
          result.splice(j, 0, arr[i]);
          // result 배열의 어떠한 값보다 arr[i]가 작을 때 그 사이에 값을 넣어준다!
          break; // 해결 되었으니 break 걸어줘야 한다.
        }
      }
    }
  }
  return result;
};
