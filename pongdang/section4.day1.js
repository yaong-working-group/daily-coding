// @see https://www.javatpoint.com/radix-sort
// 1. 2차원 배열 만들기
// 2. 자리 수의 값을 구해서 자리 수 인덱스에 값 넣기
// 3. 2차원 배열을 1차원 배열로 변환하기
// 4. 다음 자리 수의 값 구해서 자리 수 인덱스에 값 넣기
// 5. 반복
function radixSort(arr) {
  // 음수 요소들과 양수 요소들을 나누어 배열로 만들기
  const negativeArr = arr.filter((x) => x < 0);
  const positiveArr = arr.filter((x) => x >= 0);
  // sortNegativeArr 함수와 sortPositiveArr 힘수에 각각 음수, 양수가 모인 배열들을 인자로 넣는다.
  return [...sortNegativeArr(negativeArr), ...sortPositiveArr(positiveArr)];
}

// 음수를 정렬하기 위해서는 일련의 과정들이 필요한데, 그 과정들을 처리해주는 함수
function sortNegativeArr(arr) {
  // 음수 배열의 요소들을 모두 절대값으로 바꾸어 주기 -> 자리수가 뭔지에 따라 배열 인덱스에 push 되는데, 음수면 음수 인덱스에 push 되기 때문에
  const absNegativeNumber = arr.map((x) => Math.abs(x));
  // 음수 배열의 요소들이 양수로 바뀌었으니 sortPositiveArr 함수에 절대값이 된 요소들이 모인 배열을 인자로 넣는다.
  const negativeSortArr = sortPositiveArr(absNegativeNumber); // 오름차순으로 정렬된 배열이 반환된다.
  // 정렬된 배열을 다시 음수 배열로 바꿔야 한다. 음수는 절대값이 클 수록 작기 때문에 배열의 순서를 뒤집어주어야 한다.
  return negativeSortArr.map((x) => x * -1).reverse();
}

function sortPositiveArr(arr) {
  // 배열이 없을 수도 있기 때문에 빈 배열을 반환해준다.
  if (arr.length === 0) {
    return [];
  }
  // 인자로 받은 arr을 복사한다.
  let radixArr = arr.slice();
  // 배열의 요소 중에서 가장 큰 수의 자리수를 구해야 한다.
  const maxLength = getMaxLengthOfArray(radixArr);
  // 가장 큰 수의 자리 수 만큼 for문을 돌면서
  for (let j = 0; j < maxLength; j++) {
    // e.g. [[], [], [], [], [], [], [], [], [], []]
    const newBucket = Array.from(Array(10), () => []);
    // 배열의 요소만큼 for문을 돌면서
    for (let i = 0; i < radixArr.length; i++) {
      // 각 자리수에 해당하는 index에 push 하기
      // e.g
      // arr[i] === 234 일 때
      // 1의 자리 수 구하기 (234 / 1) % 10 === 4 (소수점은 버리기)
      // 10의 자리 수 구하기 (234 / 10) % 10 === 3 (소수점은 버리기)
      // 1의 자리 수 구하기 (234 / 100) % 10 === 2 (소수점은 버리기)
      const index = Math.floor((radixArr[i] / Math.pow(10, j)) % 10);
      newBucket[index].push(radixArr[i]);
    }
    // 2차원 배열이기 때문에 1차원 배열로 변환 후 정렬된 배열을 radixArr로 덮어 씌우기
    radixArr = newBucket.flat();
  }

  return radixArr;
}

// 숫자 중에 가장 긴 자리 수가 무엇인지 구하는 함수 -> 자리 수에 따라 구하는 로직이 다르기 때문
// e.g. [1, 2, 34] => 2
// e.g. [1, 23, 456] => 3
function getMaxLengthOfArray(arr) {
  // 배열 요소 중에 가장 긴 자리 수를 찾기
  const lengthCollection = arr.map((x) => String(x).length);

  return Math.max(...lengthCollection);
}
