"use strict";

class Heap {
  constructor() {
    this.minHeap = [];
    this.lastNode = 0; // 0번 노드 안씀
  }

  pop() {
    if (this.lastNode === 0) throw Error(`Empty Stack !`);

    const returnValue = this.minHeap[1]; // 반환 값
    let curNode = 1;

    // 루트노드를 마지막 노드로 변경
    this.minHeap[1] = this.minHeap[this.lastNode];
    this.minHeap[this.lastNode--] = 0;

    // 현재노드가 마지막 노드 넘기 전까지 반복
    while (curNode >= this.lastNode) {
      let tempNode = curNode;

      // 왼쪽 자식 노드
      if (
        curNode * 2 <= this.lastNode &&
        this.minHeap[tempNode] > this.minHeap[curNode * 2]
      )
        tempNode = curNode * 2;
      // 오른쪽 자식 노드
      if (
        curNode * 2 + 1 <= this.lastNode &&
        this.minHeap[tempNode] > this.minHeap[curNode * 2 + 1]
      )
        tempNode = curNode * 2 + 1;
      if (curNode === tempNode) break; // 끝

      let temp = arr[tempNode];
      this.minHeap[tempNode] = this.minHeap[curNode];
      this.minHeap[curNode] = temp;

      curNode = tempNode;
    }

    return returnValue;
  }

  push(num) {
    if (isNaN(num)) return false;

    this.minHeap[++this.lastNode] = num;
    let curNode = this.lastNode;

    // curNode가 루트노드가 되기 전까지 반복
    while (curNode > 1) {
      let parentNode = curNode / 2;
      // 부모가 더 값이 작거나 같으면 그대로
      if (this.minHeap[parentNode] <= this.minHeap[curNode]) break;

      // 아니면 swap
      let temp = this.minHeap[parentNode];
      this.minHeap[parentNode] = this.minHeap[curNode];
      this.minHeap[curNode] = temp;

      // curNode 설정
      curNode /= 2;
    }

    return true;
  }
}

function solution(jobs) {
  let answer = 0;
  let totalTime = 0; // 총 흐른 시간
  let length = jobs.length;
  let avgTime = 0; // 평균 처리시간

  const minHeap = new Heap();
  minHeap.push(jobs.shift()[1]);

  while (jobs.length > 0) {
    totalTime += minHeap.pop();
    console.log(totalTime);
    let flag = true;
    let count = 0;

    jobs.forEach((job) => {
      if (job[0] <= totalTime) {
        count++;
        minHeap.push(job[1]);
        flag = false;
      }
    });

    for (let i = 0; i < count; i++) jobs.shift;

    if (flag) {
      minHeap.push(jobs.shift()[1]);
    }
  }

  answer = Number((totalTime / length).toFixed(0));
  return answer;
}

console.log(
  solution([
    [0, 3],
    [1, 9],
    [2, 6],
  ])
);
