"use strict";

function solution(citations) {
  let h = 0;
  citations.sort((a, b) => a - b);

  for (let i = 0; i < citations.length; i++) {
    const item = citations[i];
    const rest = citations.length - i;

    // 논문의 인용횟수가 현재 값보다 크면 현재 값을 증가시켜서 다시 검사
    // 만약 h가 h이상인 논문의 수보다 많아지면 그만 검사
    if (item > h && h < rest) {
      h++;
      i--;
    }
  }

  return h;
}

console.log(solution([3, 0, 6, 1, 5]));
