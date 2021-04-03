'use strict';

// 모든 부품이 필요한 경우를 카운트해서 가장 많이 필요한 부품을 만들 수 있는 로봇을 구매하는 것으로 해보자.
function solution(needs, r) {
  let answer = 0;

  // 어떤 부품이 많이 쓰이는지 카운트
  let count = [];
  for (let i = 0; i < needs[0].length; i++) {
    count.push([i, 0]);
  }
  needs.forEach(need => {
    need.forEach((item, index) => item && count[index][1]++);
  });
  console.log(count);

  // 카운트 내림차순 정렬
  count.sort((a, b) => b[1] - a[1]);

  // 구매한 로봇 계산
  let purchasedRobot = [];
  for (let i = 0; i < r; i++) {
    purchasedRobot.push(count[i][0]);
  }
  console.log(purchasedRobot);

  // 몇 개의 완제품을 만들 수 있는지 계산
  Loop: for (let i = 0; i < needs.length; i++) {
    for (let j = 0; j < needs[i].length; j++) {
      if (needs[i][j]) {
        if (!purchasedRobot.includes(j)) {
          continue Loop;
        }
      }
    }

    answer++;
  }

  return answer;
}

console.log(
  solution(
    [
      [1, 0, 0],
      [1, 1, 0],
      [1, 1, 0],
      [1, 0, 1],
      [1, 1, 0],
      [0, 1, 1],
    ],
    2
  )
);
