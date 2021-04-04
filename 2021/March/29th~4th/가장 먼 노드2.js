'use strict';

function solution(n, edge) {
  let answer = 0;
  const visited = new Array(n + 1); // 노드 방문 체크 배열
  const distances = new Array(n + 1).fill(0); // 노드까지의 최단거리를 저장할 배열
  const predecessors = new Array(n + 1).fill(0); // 해당 노드의 전 노드를 저장할 배열
  const queue = [1]; // BFS를 위한 큐
  const adjList = new Array(n + 1); // 인접 리스트

  // 인접리스트 구성
  for (let i = 1; i <= n; i++) {
    adjList[i] = new Array();
  }
  for (let i = 0; i < edge.length; i++) {
    if (!adjList[edge[i][0]].includes(edge[i][1]))
      adjList[edge[i][0]].push(edge[i][1]);
    if (!adjList[edge[i][1]].includes(edge[i][0]))
      adjList[edge[i][1]].push(edge[i][0]);
  }

  visited[1] = true;
  while (queue.length !== 0) {
    const curNode = queue.shift();

    adjList[curNode].forEach(item => {
      if (!visited[item]) {
        visited[item] = true;
        distances[item] = distances[curNode] + 1;
        predecessors[item] = curNode;
        queue.push(item);
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
