const powerSet = function (str) {
  const set = Array.from(new Set(str)).sort(); // 중복된 원소를 제거 후 알파벳 순으로 정렬. ["a","b","c"]
  let newStr = set.join(""); // abc 문자열을 담는다.
  let result = []; // 결과 값을 담을 배열 선언
  function rec(addStr, idx) {
    result.push(addStr);
    // for문을 돌면서 ""부터 문자를 늘려간다.
    for (let i = idx; i < newStr.length; i++) {
      rec(addStr + newStr[i], i + 1);
    } //
  }

  rec("", 0); // 초기값과 인덱스를 넣어 함수를 호출 한다.
  return result;
};

// str = "abc";
// newStr = abc;
// [""]
// ["", "a", "b", "ab"]
// ["", "a", "b", "ab", "c", "ac", "bc", "abc"]
// ["", "a", "ab", "abc", "ac", "b", "bc", "c"]
