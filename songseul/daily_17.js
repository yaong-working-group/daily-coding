function quickSort(arr, transform = (item) => item) {
  if (arr.length <= 1) return arr; //array의 길이가 1 이하이면 해당 배열을 그대로 return하고

  const pivot = arr[0]; //원소의 0번째 요소를 pivot으로 잡는다.
  const left = []; //left와 right 배열을 새로 만든 후,
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    //0번째 요소 다음 요소부터 순회하며 pivot과 값을 비교하여
    if (transform(arr[i]) < transform(pivot)) left.push(arr[i]);
    else right.push(arr[i]); //left 배열, right 배열에 데이터를 push한 후
  }

  const lSorted = quickSort(left, transform); //하위 배열에 대해 다시 재귀 호출을 하면서 세 배열을 합쳐준다.
  const rSorted = quickSort(right, transform);
  return [...lSorted, pivot, ...rSorted];
}
