'use strict';

function solution(number, k) {
  number = number.split('');
  let answer = '';

  Loop: while (k !== 0) {
    for (let i = 0; i < number.length - 1; i++) {
      if (number[i] < number[i + 1]) {
        number[i] = '*';
        k--;
        if (k === 0) break Loop;
        else continue Loop;
      }
    }

    if (k === 0) number[number.length - 1] = '*';
  }

  for (let i = 0; i < number.length; i++) {
    if (number[i] !== '*') answer += number[i];
  }

  return answer;
}

console.log(solution('4177252841', 4));
