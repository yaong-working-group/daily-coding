/* 
========== Quick Sort =============
!! 접근법 
1. 처음에 하나의 피벗값을 정한다.
2. 반복문을 돌면서 피벗값 보다 작은 값은 왼쪽 , 피벗값 보다 큰 값은 오른쪽으로 정렬한다.
3. 재귀 호출을 하면서 계속 왼쪽 , 오른쪽 나눈 배열을 재귀 함수로 호출하면서 , 배열 길이가 1개가 될때까지 지속 호출 해준다.
====================================
*/
const quickSort = function (arr) {
  if (arr.length <= 1) return arr;

  // 처음 피벗값을 0번째로 잡는다. (피벗 잡는 기준은 어떻게 해도 상관이 없음)
  const pivot = arr[0];
  const left = [];
  const right = [];

  // 들어온 배열을 피봇값을 기준으로 오른쪽 왼쪽 배열을 나누는 부분
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= pivot) left.push(arr[i]);
    else right.push(arr[i]);
  }

  // 피벗값을 기준으로 작은 왼쪽 배열과 , 오른쪽 배열을 지속적으로 재귀함수로 호출하면서 정렬을 해준다.
  const lSorted = quickSort(left);
  const rSorted = quickSort(right);
  return [...lSorted, pivot, ...rSorted];
};
