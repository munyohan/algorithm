"use strict";

function solution(priorities, location) {
  const printList = []; // 프린트 대기 목록
  let count = 0; // 몇 번째로 출력되는지 세기위한 변수

  // 데이터 구성, [순서, 중요도]
  for (let i = 0; i < priorities.length; i++)
    printList.push([i, priorities[i]]);

  // 대기목록이 빌 때까지 반복문 (정답 구하면 break로 탈출)
  while (printList.length > 0) {
    // 하나를 대기목록에서 꺼냄
    const item = printList.shift();
    let flag = true;

    // 꺼낸 아이템보다 높은 우선순위가 있는지 확인
    for (const print of printList) {
      // 중요도 비교해서 더 큰게 대기목록에 있으면 다시 목록의 뒤에 넣어준다.
      if (print[1] > item[1]) {
        printList.push(item);
        flag = false;
        break;
      }
    }

    // 꺼낸 아이템보다 우선순위가 높은 게 없으면
    if (flag) {
      count++; // 꺼냈으므로 카운트 1 증가

      // 만약 꺼낸 아이템이 목표였으면 반복문 탈출
      if (item[0] === location) {
        break;
      }
    }
  }

  // 목표 반환
  return count;
}

console.log(solution([2, 1, 3, 2], 2));
