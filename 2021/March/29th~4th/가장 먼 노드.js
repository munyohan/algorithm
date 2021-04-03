'use strict';

/*
  제한사항
- 노드의 개수 n은 2 이상 20,000 이하입니다.
- 간선은 양방향이며 총 1개 이상 50,000개 이하의 간선이 있습니다.
- vertex 배열 각 행 [a, b]는 a번 노드와 b번 노드 사이에 간선이 있다는 의미입니다.
*/
function solution(n, edge) {
  let answer = 0;
  const minDistances = new Array(n + 1).fill(20000);

  for (let i = 1; i <= n; i++) {
    calculate(1, i, [1], 0);
  }

  console.log(minDistances);

  let max = 0;
  for (let i = 1; i < minDistances.length; i++) {
    if (max < minDistances[i]) {
      max = minDistances[i];
      answer = 1;
    } else {
      answer++;
    }
  }

  return answer;

  function calculate(start, dest, visited, distance) {
    if (minDistances[dest] < distance) return;

    if (start === dest && minDistances[dest] > distance) {
      minDistances[dest] = distance;

      return;
    }

    for (let i = 0; i < edge.length; i++) {
      if (edge[i][0] === start && !visited.includes(edge[i][1])) {
        calculate(edge[i][1], dest, [...visited, edge[i][1]], distance + 1);
      } else if (edge[i][1] === start && !visited.includes(edge[i][0])) {
        calculate(edge[i][0], dest, [...visited, edge[i][0]], distance + 1);
      }
    }
  }
}

console.log(
  solution(11, [
    [1, 2],
    [1, 3],
    [2, 4],
    [2, 5],
    [3, 5],
    [3, 6],
    [4, 8],
    [4, 9],
    [5, 9],
    [5, 10],
    [6, 10],
    [6, 11],
  ])
);
