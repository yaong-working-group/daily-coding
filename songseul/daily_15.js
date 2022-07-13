const powerSet = function (str) {
  const strSet = new Set(str); //중복을 없애고 문자 하나하나 객체의 문자열로,
  const set = Array.from(strSet); // 그리고 배열로 바꾸기
  set.sort(); // 올림차순 정렬
  let newStr = set.join(""); //배열에서 벗어 하나의 문자열로
  let result = [];
  function recursion(string, begin) {
    //재귀호출로 부분집합 생성
    // begin매개변수로 중복값, 정렬이 흐트러지지 않게 잡아준다
    result.push(string);
    for (let i = begin; i < newStr.length; i++) {
      recursion(string + newStr[i], i + 1);
    }
  }
  recursion("", 0);
  return result;
};
