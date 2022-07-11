// 입출력 예시
// let output = orderOfPresentation(3, [2, 3, 1]);
// console.log(output); // 3

// output = orderOfPresentation(5, [1, 3, 2, 4, 5])
// console.log(output); // 6

function orderOfPresentation(N, K) {
  // orderOfPresentation(3, [2,3,1]) 이라고 가정하면,
  // 우선 arr=[1,2,3]으로 중복없이 나열하는 경우의 수는,
  // arr[0]이 각각 1인 그룹, 2인 그룹, 3인 그룹으로 나눠서 생각할 수  있다
  // 따라서 3 * 2!이 전체 경우의 개수다
  const factorial = (n) => {
    if (n <= 1) return n;
    return n * factorial(n - 1);
  };

  // 발표순서 담을 변수를 선언한다
  let order = 0;

  // 어떠한 조가 이미 포함되었는지 확인하기 위해 isUsed 배열을 생성
  // Array(N+1)인 이유는, 조는 1조부터 시작하지만 배열 인덱스는 0부터 시작하기 때문에 더미데이터를 앞에다 넣어주는 것
  const isUsed = Array(N + 1).fill(false); // 결과는 [false, false, false, false]

  // K의 개수만큼 반복
  for (let i = 0; i < K.length; i++) {
    // K의 i번째 조를 num에 담는다.
    const num = K[i];
    // 1R: num = K[0] = 2
    // 2R: num = k[1] = 3
    // 3R: num = K[2] = 1

    // 사용했는지 판별하기 위하여 isUsed에 true로 값을 바꿈
    isUsed[num] = true;
    // 1R: isUsed[2] = true, [false, false, true, false]
    // 2R: isUsed[3] = true, [false, false, true, true]
    // 3R: isUsed[1] = true, [false, true, true, true]

    // 아래 코드는 해당 숫자보다 앞에있는 경우를 구해주는 식이다

    const candidates = isUsed.slice(1, num);
    // 1R: candidates = isUsed.slice(1, 2) = [false];
    // 2R: candidates = isUsed.slice(1, 3) = [false, true]
    // 3R: candidates = isUsed.slice(1, 1) = []

    const validCnt = candidates.filter((el) => el === false).length;
    // 1R: validCnt = [false] 에서 false 의 length = 1
    // 2R: validCnt = [false, true]에서 false 의 length = 1
    // 3R: validCnt = 0

    const formerCnt = validCnt * factorial(N - i - 1);
    // 1R: formerCnt = 1 * factorial(3-0-1) = 1 * 2! = 2
    // 2R: formerCnt = 1 * factorial(3-1-1) = 1 * 1 = 1
    // 3R: formerCnt = 0

    order = order + formerCnt;
    // 1R: order = 0 + 2 = 2
    // 2R: order = 2 + 1 = 3
    // 3R: order = 3 + 0 = 3
  }
  return order; // 3
}
