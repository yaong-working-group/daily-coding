// 모든 경우의 배열 생성하여 K 배열과 같은 배열의 index를 반환하는 방법
function orderOfPresentation(N, K) {
  const newArray = new Array(N).fill(1).map((el, index) => el + index);
  const resultArr = premute(newArray, K[0]);
  return resultArr.findIndex((el) => JSON.stringify(el) === JSON.stringify(K));
}

const premute = function (nums) {
  const output = [];
  helper(output, [], nums);
  return output;
};

function helper(output, tempOutput, nums) {
  if (tempOutput.length === nums.length) {
    output.push(tempOutput.slice());
  }

  for (let i = 0; i < nums.length; i++) {
    if (tempOutput.includes(nums[i])) {
      continue;
    }
    tempOutput.push(nums[i]);
    helper(output, tempOutput, nums);
    tempOutput.pop();
  }
}

// 경우의 수만 구하는 방법
function orderOfPresentation(N, K) {
  let result = 0;

  if (K[0] === 1) {
    result = 0;
  } else {
    result = (K[0] - 1) * factorial(N - 1);
  }

  for (let i = 1; i < N; i++) {
    let count = 0;
    for (let j = i; j < N; j++) {
      if (K[i] > K[j]) {
        count++;
      }
    }
    result += count * factorial(N - 1 - i);
  }

  return result;
}

function factorial(num) {
  if (num === 0) {
    return 1;
  }
  return num * factorial(num - 1);
}
