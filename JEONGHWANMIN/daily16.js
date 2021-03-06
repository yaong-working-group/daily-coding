/* 목요일
========== InsertionSort =============
i = 1 부터 시작해서 앞에 값들이랑 비교해 가면서 앞에서부터 정렬 하는 방식
대표적으로 버블 , 선택 , 삽입 3개가 세트인 기본 정렬 알고리즘 중 하나

!! 
1. 삽입정렬은 i = 1 부터 시작해서 앞에 값들이랑 비교하면서 정렬을 시작하는 알고리즘 
2. 만약 앞에 값이 i 값 보다 작다면 뒷 값을 덮어가면서 정렬

TEST : Advanced 실패
뭔소리인지 모르겠음 .. 테케 보니까 절대값 기준으로 정렬인가 ?!
====================================
*/

const InsersitonSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    // i번째 비교하는 값을 가지고 있어야 하기 때문에 mainNum 이라는 변수에 상태값을 저장해 줍니다.
    // 나중에 j 값을 블록 밖에서 꺼내서 써야하기 때문에 선언해 줍니다.
    let mainNum = arr[i];
    let j;
    for (j = i - 1; j >= 0; j--) {
      // 앞에 j 값이 i값 보다 작다면 j+1번째 값을 j값을 대입해줍니다.
      if (mainNum < arr[j]) arr[j + 1] = arr[j];
      // 만약에 앞에 i 값이 j값 보다 크다면 반복문을 중단합니다.
      // (앞쪽부터 정렬이 되기 때문에 앞쪽 부분은 정렬이 되어 있습니다.)
      else break;
    }
    /* 
    j+1로 시작하는 이유는 for문을 끝나고 나오면 j === -1이 되는데 
    arr[-1] 은 접근할 수 가 없기 때문입니다...
    */
    arr[j + 1] = mainNum;
  }
  return arr;
};

const result = InsersitonSort([5, 4, 3, 2, 1]);
console.log(result);

/* 목요일
========== ADVANCED =============
테스트 케이스를 보면 cb = (item) => item * item 이렇게 나와있고 , 
insertionSort([-10, -11, 2, 29], cb).should.eql([2, -10, -11, 29]); 
이런식으로 결괏값이 나온다.
그러면 item * item값이 큰 기준으로 정렬을 한 거고 , 배열에는 item * item값이 아닌 원본 배열 값으로 정렬이 되어야 하므로 , 
if 조건에만 함수를 씌워서 비교하고 , 배열에 넣어줄 떄는 원본 배열값으로 넣어준다.
====================================
*/

const insertionSort = function (arr, cb) {
  // 컬백함수가 있는 경우
  if (cb) {
    let j;
    for (let i = 1; i < arr.length; i++) {
      let mainNum = arr[i];
      for (j = i - 1; j >= 0; j--) {
        if (cb(mainNum) < cb(arr[j])) {
          arr[j + 1] = arr[j];
        } else break;
      }
      arr[j + 1] = mainNum;
    }
  }
  // 컬백함수가 없는 경우
  // 컬백함수가 있다고 가정을 하면 cb가 없다고 에러가 뜬다.
  else {
    let j;
    for (let i = 1; i < arr.length; i++) {
      let mainNum = arr[i];
      for (j = i - 1; j >= 0; j--) {
        if (mainNum < arr[j]) {
          arr[j + 1] = arr[j];
        } else break;
      }
      arr[j + 1] = mainNum;
    }
  }

  return arr;
};
