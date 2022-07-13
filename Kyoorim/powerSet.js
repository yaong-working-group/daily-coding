// 1. split('')으로 문자열 분리 후 sort()로 정렬 => arr
// 2. 결과가 담길 배열 [""] 선언 => result
// 3. arr의 각 요소를 떼어서 result 요소에 돌아가며 붙여주는 함수 선언 => func

const powerSet = function (str) {
  let arr = str.split("").sor();
  let result = [""];

  let func = (ele, result) => {
    // result 요소를 돌아가며 ele를 추가할 함수 선언
    let copy = result.slice(); // result 배열 복사본
    for (let i = 0; i < copy.length; i++) {
      copy[i] += target;
      result.push(copy[i]);
    }
    return result;
  };
  for (let i = 0; i < arr.length; i++) {
    // arr를 돌면서 요소를 하나쌕 빼냄
    if (!result.includes(arr[i])) {
      func(arr[i], result);
    }
  }
  return result.sort(); // 결과값 정렬
};
