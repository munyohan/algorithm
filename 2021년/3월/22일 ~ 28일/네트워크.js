'use strict';

// 연결된 네트워크의 개수를 구하는 문제이다.
// 모든 컴퓨터가 연결되어 있으면 네트워크의 개수는 1개
// 모든 컴퓨터가 연결되어 있지 않으면 네트워크의 개수는 n개
// 내 생각에는 union-find를 쓰면 쉽게 풀 수 있을 것 같다.

function solution(n, computers) {
  let p = new Array(n);

  // 컴퓨터 개수만큼 생성
  for (let i = 0; i < n; i++) {
    make(i);
  }

  for (let i = 0; i < computers.length; i++) {
    for (let j = 0; j < computers[i].length; j++) {
      if (i === j) continue; // 자기 자신은 제외

      // 네트워크로 연결되어 있으면 한 그룹으로 union
      if (computers[i][j] === 1) {
        union(i, j);
      }
    }
  }

  const tmp = []; // 집합의 개수를 세어주기 위해 임시로 만든 배열
  for (let i = 0; i < p.length; i++) {
    const t = find(p[i]); // 최상단의 부모로 업데이트
    // tmp에 포함이 안되어있으면 새로운 집합이므로 추가
    if (!tmp.includes(t)) {
      tmp.push(t);
    }
  }

  // 집합의 개수 출력
  return tmp.length;

  function make(x) {
    p[x] = x;
  }

  function union(x, y) {
    const px = find(x);
    const py = find(y);

    if (px !== py) {
      p[py] = px;
    }
  }

  function find(x) {
    if (p[x] === x) {
      return x;
    } else {
      p[x] = find(p[x]);
      return p[x];
    }
  }
}

console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 1],
    [0, 1, 1],
  ])
);
