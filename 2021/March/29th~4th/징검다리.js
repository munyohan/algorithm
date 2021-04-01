'use strict';

/*
  제한사항
- 도착지점까지의 거리 distance는 1 이상 1,000,000,000 이하입니다.
- 바위는 1개 이상 50,000개 이하가 있습니다.
- n 은 1 이상 바위의 개수 이하입니다.
*/

/*
  distance: 출발지와 목적지까지의 거리
  rocks: 거리 사이에 있는 돌들의 위치 값
  n: 제거할 돌의 개수
*/

function solution(distance, rocks, n) {
  let answer = distance; // 바위 전부를 제거하는 경우 답은 distance

  return answer;
}

console.log(solution(25, [2, 14, 11, 21, 17], 2)); // 정답: 4
