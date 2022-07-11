/* 금요일 
========== UglyNumbers =============
아래와 같이 정의된 ugly numbers 중 n번째 수를 리턴해야 합니다.

ugly number는 2, 3, 5로만 나누어 떨어지는 수이다.
1은 1번째 ugly number 이다.
1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, 16, ...

!! 
1. 숫자를 1씩 대입하면서 uglyNumber인지 확인한다.
2. 만약 어글리 넘버가 맞다면 배열에 push한다.
3. 배열 갯수가 n이랑 같다면 , 내가 원하는 값까지 도달한 것 이기 떄문에 값을 출력할 수 있다.
4. 숫자 하나하나 for문을 돌기떄문에 시간 복잡도가 좋지 못하다. (근데 O(N)방법 생각이 안남..)
====================================

Test : PASS (효율적으로 안구했는데 통과됨...)
*/

// isUgly 값이 2부터 하나하나 들어오면 각각 2,3,5로 나눠보고 나눠지면 ugly , 안 나눠떨어지면 ugly넘버가 아닌거다.
function isUgly(num) {
  // num -> 몫 (몫이 1이되면 나눠떨어진다는 것)
  while (num !== 1) {
    if (num % 2 === 0) num = num / 2;
    else if (num % 3 === 0) num = num / 3;
    else if (num % 5 === 0) num = num / 5;
    // 2,3,5로 안나누어 떨어지면 어글리 넘버가 아님 !!
    else return false;
  }
  return true;
}

// 문제에서 1은 첫번째 uglyNumber로 주어졌으므로 1은 배열에 넣고 시작한다.
// 1은 확인했기 때문에 2부터 넣어서 확인한다.
const uglyNumbers = function (n) {
  let count = 2;
  let uglyArr = [1];
  // 원하는 배열 길이만큼 배열이 찼으면 반복문을 중지한다.
  while (uglyArr.length <= n) {
    // 숫자 하나하나 넣어가면서 어글리 넘버인지 확인
    // 맞으면 uglyArr에 넣어준다.
    if (isUgly(count)) uglyArr.push(count);
    // 숫자를 하나씩 올려가면서 확인하기 위해서 숫자 ++ (ex) 2,3,4,5,6,7,8,9....
    count++;
  }
  // 인덱스 값에 접근하기 위해서 n - 1 로 출력을 해준다.
  return uglyArr[n - 1];
};

console.log(uglyNumbers(15));

/* O(N) 방법
========== Reference Code =============
!! 접근법 
1. 처음 숫자에 (2,3,5)를 곱한다.
2. 어글리 넘버에 2,3,5 무엇을 곱하든 어글리 넘버이다.
3. 어글리 넘버를 차근차근 쌓아가기 위해서 무조건 곱하는것이 아닌 제일 작은 값을 구하고 그 인덱스 값을 올려가면서 확인한다.
====================================
*/
function uglyOn(n) {
  let uglyArr = [1];
  // 배열을 각각 작은값부터 정렬하기 위해서 각각 2,3,5에 해당하는 인덱스를 설정해줌
  let idx1 = 0;
  let idx2 = 0;
  let idx3 = 0;

  // N번만큼 반복문을 수행 (N번돌면 N개의 배열이 쌓여있음)
  for (let i = 0; i < n; i++) {
    // 2 3 5 각각 숫자를 곱한다.
    let num1 = uglyArr[idx1] * 2;
    let num2 = uglyArr[idx2] * 3;
    let num3 = uglyArr[idx3] * 5;

    // 그 결괏값중 제일 작은 값을 찿아서 배열에 푸쉬해줌 Ex) first : 2 , second : 3 ....
    let minNum = Math.min(num1, num2, num3);
    uglyArr.push(minNum);

    // 각각 결괏값이 최솟값이랑 같으면 그 인덱스를 올려줌
    // 순서대로 배열을 쌓아올리기 위해서 하는 로직
    if (minNum === num1) idx1++;
    if (minNum === num2) idx2++;
    if (minNum === num3) idx3++;
  }

  console.log(uglyArr[n - 1]);
}

uglyOn(15);
