/*
- 헬퍼 함수 (시간복잡도: O(n + m) → 요소가 n개인 배열 + 요소가 m개인 배열)
    - 주의 : 비교할 두 배열이 최초에 동일한 방식으로 정렬되어 있어야 한다. 하나는 오름차순, 하나는 내림차순이면 안된다.
    - 조건에 따라 첫번째 배열의 i 포인터가 이동하거나 두번째 배열의 j 포인터가 이동하면서 두 배열을 비교하고 result에 조건에 맞는 요소를 push한다.
    
    **의사코드**
    
    1. 결과를 담을 빈 배열 선언(result). 인덱스 값으로 사용할 i와 j를 선언하고 0으로 초기화.
    2. i와 j가 배열의 마지막 요소에 도달할 때 까지 while loop.
        1. 만약 첫번째 배열의 i번째 요소가 두번째 배열의 j번째 요소보다 작으면  result에 첫번째 배열의 i번째 요소를 담고(result.push(arr[i])) 첫번째 배열의 다음 요소로 넘어감(i++).
        2. 만약 첫번째 배열의 i번째 요소가 두번째 배열의 j번째 요소보다 크다면 result에 두번째 배열의 j번째 요소를  담고 두번째 배열의 다음 요소로 넘어감(j++).
        3. 배열 하나를 완료한 다음에는 다른 배열의 남은 값을 모두 result에 넣는다. 
    
- 메인 로직 함수
    - 배열을 계속 분할해서 (부분)배열의 길이가 1 이하가 될 때까지 재귀 호출.
    - 반환값으로 헬퍼함수를 호출하여 두 배열을 병합하여 최종 결과를 리턴한다.
    
    **의사코드**
    
    1. base case : 만약 현재 배열의 길이가 1 이하이면 현재 배열을 리턴한다.
    2. recursive case : 
        1. mid는 배열 길이를 2로 나눠 내림한 값.
        2. 왼쪽 배열을 재귀 호출(0번째부터 mid전까지의 요소들).
        3. 오른쪽 배열을 재귀 호출 (mid부터 끝까지의 요소들).
    3. 반환값에서 헬퍼함수를 호출하여 부분 배열들을 모두 정렬하며 병합한다.
*/

const mergeSort = arr => {
  // 1. 두 배열을 병합하는 헬퍼함수를 정의.
  function merge(arr1, arr2) {
    let results = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
      if (arr2[j] > arr1[i]) {
        results.push(arr1[i]);
        i++;
      } else {
        results.push(arr2[j]);
        j++;
      }
    }
    while (i < arr1.length) {
      results.push(arr1[i]);
      i++;
    }
    while (j < arr2.length) {
      results.push(arr2[j]);
      j++;
    }
    return results;
  }

  // 2. 메인 로직 - 배열을 분할하며 헬퍼함수를 재귀 호출
  // base case
  if (arr.length <= 1) return arr;

  // recursive case
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
};

// All Passed
// 입출력 예시
let output = mergeSort([3, 1, 21]);
console.log(output); // --> [1, 3, 21]
