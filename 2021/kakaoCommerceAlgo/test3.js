'use strict';

function solution(n, passenger, train) {
  let endStation = 0;
  let sumOfPassengers = 0;

  for (let i = 2; i <= n; i++) {
    calculate(1, i, 0, [1]);
  }

  return [endStation, sumOfPassengers];

  function calculate(curPos, targetPos, sum, visited) {
    let newSum = sum + passenger[curPos - 1];

    if (curPos === targetPos) {
      if (newSum >= sumOfPassengers) {
        sumOfPassengers = newSum;
        endStation = targetPos;
      }
      return;
    }

    for (let i = 0; i < train.length; i++) {
      if (train[i][0] === curPos && !visited.includes(train[i][1])) {
        calculate(train[i][1], targetPos, newSum, [...visited, train[i][1]]);
      } else if (train[i][1] === curPos && !visited.includes(train[i][0])) {
        calculate(train[i][0], targetPos, newSum, [...visited, train[i][0]]);
      }
    }
  }
}

const passenger = new Array(100000).fill(1);
let train = new Array(99999);

for (let i = 1; i < train.length; i++) {
  train.push([1, i + 1]);
}

console.log(solution(100000, passenger, train));
