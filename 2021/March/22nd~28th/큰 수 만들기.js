'use strict';

function solution(number, k) {
  let answer = number.split('');

  Loop: while (k !== 0) {
    for (let i = 1; i < answer.length; i++) {
      if (answer[i - 1] < answer[i]) {
        answer.splice(i - 1, 1);
        k--;
        if (k === 0) break Loop;
        else continue Loop;
      }
    }
  }

  return answer.join('');
}

console.log(solution('4177252841', 4));
