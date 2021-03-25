'use strict';

function solution(numbers, target) {
  let answer = 0;

  test(0, 0);

  return answer;

  function test(totalSum, idx) {
    if (idx === numbers.length) {
      if (totalSum === target) answer++;
      return 0;
    }

    test(totalSum + numbers[idx], idx + 1);
    test(totalSum - numbers[idx], idx + 1);
  }
}

console.log(solution([1, 1, 1, 1, 1], 3)); // 정답: 5
