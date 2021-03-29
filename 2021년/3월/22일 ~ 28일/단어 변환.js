'use strict';

function solution(begin, target, words) {
  let answer = Number.MAX_VALUE;

  testWord(begin, [], 0);

  if (answer === Number.MAX_VALUE) return 0;
  else return answer;

  function testWord(newWord, visitedIndex, cnt) {
    if (newWord === target) {
      if (answer > cnt) answer = cnt;
      return;
    }

    // test if newWord can be changed to one of words except visited ones
    for (let i = 0; i < words.length; i++) {
      if (visitedIndex.includes(i)) continue;

      const nextWord = canChange(newWord, words[i]);

      if (nextWord) {
        testWord(nextWord, [...visitedIndex, i], cnt + 1);
      }
    }
  }

  function canChange(from, to) {
    let cnt = 0;

    for (let i = 0; i < from.length; i++) {
      if (from[i] !== to[i]) {
        cnt++;
      }

      if (cnt >= 2) return '';
    }

    return to;
  }
}

console.log(solution('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog']));
