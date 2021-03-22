'use strict';

// 가능한 모든 조합을 뽑은 후
// 합쳐진 숫자가 유효한지 검사
// 그 후, 소수인지 검사
// 소수이면 배열에 추가
// 배열의 길이를 반환

function solution(numbers) {
  let answer = [];
  const cards = numbers.split('');

  for (let i = 1; i <= numbers.length; i++) {
    const data = perm(cards, i);

    for (const strNum of data) {
      if (strNum[0] === '0') continue;
      const num = Number(strNum);
      let count = 0;

      for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
          count++;

          if (count > 2) break;
        }
      }

      if (count === 2 && !answer.find(item => item === num)) {
        answer.push(num);
      }
    }
  }

  return answer.length;
}

function comb(arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map(value => value);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = comb(rest, selectNumber - 1);
    const attached = combinations.map(combination => fixed + combination);

    results.push(...attached);
  });

  return results;
}

function perm(arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map(value => value);

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permutations = perm(rest, selectNumber - 1);
    const attached = permutations.map(permutation => fixed + permutation);

    results.push(...attached);
  });

  return results;
}

console.log(solution('011'));

// console.log(parseInt('011'));

// solution('17');
