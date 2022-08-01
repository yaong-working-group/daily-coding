const LIS = function (arr) {
  // 배열의 길이만큼 1로 채운 배열 만들기
  const count = Array(arr.length).fill(1);

  for (let i = 1; i < arr.length; i++) {
    for (let k = 0; k < i; k++) {
      // 배열을 순회하면서 현재 요소보다 작은 요소가 몇 개가 있는지 센다.
      // 세는데 이미 센 작은 요소보다 더 작은 요소를 또 세면 안 되기 때문에 count가 현재 위치한 요소의 count 보다 큰 지 확인한다.
      if (arr[i] > arr[k] && count[i] < count[k] + 1) {
        count[i]++;
      }
    }
  }

  // 나보다 작은 요소가 얼마나 있는지 센 count 배열에서 가장 큰 값을 반환한다.
  return Math.max(...count);
};
