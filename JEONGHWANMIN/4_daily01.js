/* 
========== radixSort =============

!! 접근법 
1. 각각 숫자의 자릿수 배열을 만들어준다.
2. 각 숫자를 돌면서 첫번째 자릿수 부터 숫자 자릿수 배열에 넣어준다.
3. 그렇게 모아진 숫자 자릴수 배열을 풀어준다.
4. 위 과정을 자릿수 만큼 반복한다.

TEST : PASS
====================================
*/

function radixSort(arr) {
  // 각각 자릿수 배열을 만들어서 객체 안으로 관리할 수 있도록 객체안에 배열을 만들어 줍니다.
  let bukets = {};
  const buket = Array.from({ length: 10 }, (_, i) => [i]);
  for (let el of buket) {
    bukets[el] = [];
  }

  // 각각 숫자의 최대 길이를 구해서 그 자릿수 만큼 반복할 수 있도록 합니다.
  let lenArr = arr.map((v) => (v + '').length);
  let maxLen = Math.max(...lenArr);

  // 배열의 각자릿수 를 비교하기위한 인덱스 입니다. [lenght - idx]
  let idx = 1;

  for (let digit = 0; digit < maxLen; digit++) {
    let temp = [];
    /* 
    각각 자릿수 만큼 반복문을 도는데 이 때 각 자릿수를 문자열로 바꿔서 비교를 하고 ,
    배열안에 넣어줄떄는 원본 배열 숫자를 넣어줍니다.
    */
    for (let i = 0; i < arr.length; i++) {
      // 각 숫자를 문자열로 바꿔줍니다 !
      let strN = arr[i] + '';
      // 숫자의 첫쨰 자릿수 부터 비교하기 위해서 배열 길이 - 1 부터 비교해줍니다 !
      // 음수일때는 배열 왼쪽부터 채워질 수 있도록 unshift를 해줬습니다.
      if (strN[strN.length - `${idx}`] === '-') bukets['0'].unshift(arr[i]);
      else if (strN[strN.length - `${idx}`] === undefined)
        bukets['0'].push(arr[i]);
      // 음수나 undefined가 아닐때는 각 자릿수에 맞는 배열에 들어가도록 하게 해줍니다.
      else bukets[strN[strN.length - `${idx}`]].push(arr[i]);
    }
    idx++;

    // 정렬된 버켓을 다시 풀어줍니다. (digit번 반복)
    for (let key in bukets) {
      temp.push(...bukets[key]);
    }
    // 원본 배열을 정렬된 배열로 다시 바꿔줍니다.
    arr = temp.slice();

    //  bukets를 다시 초기화 시켜 줍니다.
    for (let el of buket) {
      bukets[el] = [];
    }
  }
  return arr;
}

let result = radixSort([15, 27, 64, -25, 50, 17, 39, 28]);
console.log(result);
