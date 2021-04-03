'use strict';

function solution(n, passenger, train) {
  let endStation = 0;
  let sumOfPassengers = 0;

  const visited = [];
  const queue = [1];

  let sum = 0;
  while (queue.length !== 0) {
    const curPos = queue.shift();
    const newSum = sum + passenger[curPos - 1];
    let flag = false;
    visited[curPos] = true;

    for (let i = 0; i < train.length; i++) {
      if (train[i][0] === curPos && !visited[train[i][1]]) {
        // calculate(train[i][1], targetPos, newSum, [...visited, train[i][1]]);
        queue.push(train[i][1]);
        flag = true;
      } else if (train[i][1] === curPos && !visited[train[i][0]]) {
        // calculate(train[i][0], targetPos, newSum, [...visited, train[i][0]]);
        queue.push(train[i][0]);
        flag = true;
      }
    }

    if(flag)
  }

  return [endStation, sumOfPassengers];
}

// const passenger = new Array(100000).fill(1);
// let train = new Array(99999);

// for (let i = 1; i < train.length; i++) {
//   train.push([1, i + 1]);
// }

// console.log(solution(100000, passenger, train));
console.log(
  solution(
    6,
    [1, 1, 1, 1, 1, 1],
    [
      [1, 2],
      [1, 3],
      [1, 4],
      [3, 5],
      [3, 6],
    ]
  )
);
