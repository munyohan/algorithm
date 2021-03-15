"use strict";

function solution(progresses, speeds) {
  const arr = [];
  const answer = [];

  // 데이터 구성
  for (let i = 0; i < progresses.length; i++) {
    arr.push([progresses[i], speeds[i]]);
  }

  // 작업 사라질 때까지 반복
  while (arr.length > 0) {
    // 각 작업의 작업량 계산
    arr.forEach((p) => {
      p[0] += p[1];
    });

    // 작업량이 100을 초과하면 큐에서 제거
    let count = 0;
    while (arr.length > 0 && arr[0][0] >= 100) {
      arr.shift();
      count++;
    }

    if (count > 0) answer.push(count);
  }

  return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5]));
