'use strict';

/*
  제한 사항
- 선수의 수는 1명 이상 100명 이하입니다.
- 경기 결과는 1개 이상 4,500개 이하입니다.
- results 배열 각 행 [A, B]는 A 선수가 B 선수를 이겼다는 의미입니다.
- 모든 경기 결과에는 모순이 없습니다.
*/
function solution(n, results) {
  let answer = 0;
  const adjArray = new Array(n + 1);
  for (let i = 1; i <= n; i++) {
    adjArray[i] = new Array(n + 1).fill('');
  }

  results.forEach(result => {
    adjArray[result[0]][result[1]] = 'W';
    adjArray[result[1]][result[0]] = 'L';
  });

  Loop: for (let i = 1; i <= n; i++) {
    const winQ = [i];
    const loseQ = [i];
    const winV = [];
    const loseV = [];
    let winCnt = 0;
    let loseCnt = 0;

    while (winQ.length !== 0) {
      if (winCnt + loseCnt === n - 1) {
        answer++;
        continue Loop;
      }

      const current = winQ.shift();

      for (let j = 1; j <= n; j++) {
        if (adjArray[current][j] === 'W' && !winV.includes(j)) {
          winCnt++;
          winQ.push(j);
          winV.push(j);
        }
      }
    }

    while (loseQ.length !== 0) {
      if (winCnt + loseCnt === n - 1) {
        answer++;
        continue Loop;
      }

      const current = loseQ.shift();

      for (let j = 1; j <= n; j++) {
        if (adjArray[current][j] === 'L' && !loseV.includes(j)) {
          loseCnt++;
          loseQ.push(j);
          loseV.push(j);
        }
      }
    }
  }

  return answer;
}

console.log(
  solution(8, [
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
    [5, 6],
    [6, 7],
    [7, 8],
  ])
); // 2번 5번 해서 정답은 2
