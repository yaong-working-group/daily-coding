const powerSet = function (str) {
  // 문자열 안에서 중복된 문자를 제거하고 문자의 순서대로 나열된 배열을 만든다
  // 시작점이 되는 문자 하나를 정한다.
  // 배열을 순회하면서 시작점이 되었던 문자에 배열 안에 있는 문자를 하나 덧붙여서 빈 배열에 push 한다.
  // 또 시작점이 되었던 문자에 덧붙여진 문자에 또 배열 안에 있는 문자를 하나 덧붙여서 빈 배열에 push 한다.
  // 이걸 배열의 길이만큼 반복한다.

  // str에서의 중복된 문자를 제거하고, -> new Set(str)
  // 배열에 담고, -> [...new Set(str)]
  // 문자 순서대로 정렬 -> [...new Set(str)].sort()
  const arr = [...new Set(str)].sort();

  // 덧붙여지는 문자열들을 담을 배열
  const result = [];

  const concatStr = function (string, start) {
    // 시작점이 될 문자를 배열에 넣기
    result.push(string);

    // for문을 돌면서 시작점이 된 문자에 문자 덧붙이기
    for (let i = start; i < arr.length; i++) {
      // 시작점이 된 문자 + 배열 안에 있는 문자
      const newStr = string + arr[i];

      // 합쳐진 문자와 또 덧붙일 문자의 인덱스를 인자로 넣어 concatStr 함수 호출
      concatStr(newStr, i + 1);
    }
  };

  // 초기값 "" 와 덧붙일 문자의 인덱스를 넣어 concatStr 함수 호출
  concatStr("", 0);

  // concatStr 함수 실행이 다 끝난 뒤 result 배열 반환
  return result;
};

// 입출력 예시
// let output1 = powerSet('abc');
// console.log(output1); // ['', 'a', 'ab', 'abc', 'ac', 'b', 'bc', 'c']

// let output2 = powerSet('jjump');
// console.log(output2); // ['', 'j', 'jm', 'jmp', 'jmpu', 'jmu', 'jp', 'jpu', 'ju', 'm', 'mp', 'mpu', 'mu', 'p', 'pu', 'u']

// 모든 테스트를 통과했습니다.
