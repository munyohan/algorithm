'use strict';

/*
  제한사항
- 노드의 개수 n은 2 이상 20,000 이하입니다.
- 간선은 양방향이며 총 1개 이상 50,000개 이하의 간선이 있습니다.
- vertex 배열 각 행 [a, b]는 a번 노드와 b번 노드 사이에 간선이 있다는 의미입니다.
*/
function solution(n, edge) {
  let answer = 0;
  const queue = [[1, 0]]; // 맨 처음 시작은 1번에서 한다. 각 요소의 첫 번째 원소는 노드의 번호, 두 번째는 거리이다.
  const adjList = new Array(n + 1); // 인접리스트 선언
  for (let i = 1; i <= n; i++) {
    adjList[i] = new Array();
  }
  // 각 노드까지의 거리를 저장할 배열 선언
  const distances = new Array(n + 1).fill(Number.MAX_SAFE_INTEGER);
  // 0번과 1번은 0으로 설정. 0은 안쓰기 때문이고 1은 출발점이기 때문이다.
  distances[0] = 0;
  distances[1] = 0;

  // 인접 리스트 생성
  edge.forEach(item => {
    if (!adjList[item[0]].includes(item[1])) adjList[item[0]].push(item[1]);
    if (!adjList[item[1]].includes(item[0])) adjList[item[1]].push(item[0]);
  });

  while (queue.length !== 0) {
    const curPos = queue.shift();

    adjList[curPos[0]].forEach(item => {
      if (distances[item] > curPos[1] + 1) {
        distances[item] = curPos[1] + 1;
        queue.push([item, curPos[1] + 1]);
      }
    });
  }

  let max = 0;
  distances.forEach(item => {
    if (max < item) {
      max = item;
      answer = 1;
    } else if (max === item) {
      answer++;
    }
  });

  return answer;
}

console.log(
  solution(6, [
    [3, 6],
    [4, 3],
    [3, 2],
    [1, 3],
    [1, 2],
    [2, 4],
    [5, 2],
  ])
);
