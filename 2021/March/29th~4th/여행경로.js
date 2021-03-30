'use strict';

function solution(tickets) {
  let answer = 0;
  const routeList = []; // 가능한 모든 경로를 저장할 리스트

  travel(['ICN'], [], 0); // 처음 출발은 무조건 ICN이다.

  // 가능한 모든 경로 중에서 알파벳 순으로 정렬했을 때, 첫 번째가 정답
  answer = routeList.sort((a, b) => {
    for (let i = 1; i < a.length; i++) {
      if (a[i] === b[i]) continue;
      // 공항이 같으면 다음 공항을 비교해야 한다
      else {
        if (a[i] < b[i]) return -1;
        else if (a[i] > b[i]) return 1;
      }
    }

    return 0;
  })[0];

  return answer;

  function travel(route, usedTicketIndex, cnt) {
    // 종료 조건: 모든 티켓을 다 쓴 그 순간이 종료되야하는 시점
    if (cnt === tickets.length) {
      routeList.push(route);
      return;
    }

    // 티켓들을 쭉 보면서
    for (let i = 0; i < tickets.length; i++) {
      // 쓴 티켓은 제외하고
      if (usedTicketIndex.includes(i)) continue;

      // 현재 있는 곳에서 갈 수 있는 모든 공항을 travel 해준다.
      if (tickets[i][0] === route[route.length - 1]) {
        travel([...route, tickets[i][1]], [...usedTicketIndex, i], cnt + 1);
      }
    }

    return;
  }
}

console.log(
  solution([
    ['ICN', 'SFO'],
    ['ICN', 'ATL'],
    ['SFO', 'ATL'],
    ['ATL', 'ICN'],
    ['ATL', 'SFO'],
  ])
);
