"use strict";

function solution(jobs) {
  class Heap {
    // 하나의 데이터는 [들어온시간, 총 걸리는 시간] 으로 구성
    // 힙의 기준은 총 걸리는 시간을 기준으로 함
    constructor() {
      this.minHeap = [];
      this.lastNode = 0; // 0번 노드 안씀
    }

    print() {
      const data = [...this.minHeap];
      return `minHeap: ${data} / lastNode: ${this.lastNode}`;
    }

    pop() {
      if (this.lastNode === 0) throw Error(`Empty Stack !`);

      const returnValue = this.minHeap[1]; // 반환 값
      let curNode = 1;

      // 루트노드를 마지막 노드로 변경
      this.minHeap[1] = this.minHeap[this.lastNode];
      this.minHeap[this.lastNode--] = 0;

      // 현재노드가 마지막 노드 넘기 전까지 반복
      while (curNode <= this.lastNode) {
        let tempNode = curNode;

        // 왼쪽 자식 노드
        if (
          curNode * 2 <= this.lastNode &&
          this.minHeap[tempNode][1] > this.minHeap[curNode * 2][1]
        ) {
          tempNode = curNode * 2;
        }
        // 오른쪽 자식 노드
        if (
          curNode * 2 + 1 <= this.lastNode &&
          this.minHeap[tempNode][1] > this.minHeap[curNode * 2 + 1][1]
        ) {
          tempNode = curNode * 2 + 1;
        }
        if (curNode === tempNode) break; // 끝

        let temp = this.minHeap[tempNode];
        this.minHeap[tempNode] = this.minHeap[curNode];
        this.minHeap[curNode] = temp;

        curNode = tempNode;
      }

      // console.log(`pop, ${this.print()}`);

      return returnValue;
    }

    push(data) {
      this.minHeap[++this.lastNode] = data;
      let curNode = this.lastNode;

      // curNode가 루트노드가 되기 전까지 반복
      while (curNode > 1) {
        let parentNode = curNode >> 1;
        // 부모가 더 값이 작거나 같으면 그대로
        if (this.minHeap[parentNode][1] <= this.minHeap[curNode][1]) break;

        // 아니면 swap
        let temp = this.minHeap[parentNode];
        this.minHeap[parentNode] = this.minHeap[curNode];
        this.minHeap[curNode] = temp;

        // curNode 설정
        curNode = curNode >> 1;
      }

      // console.log(`push, ${this.print()}`);

      return true;
    }
  }

  jobs.sort((a, b) => {
    if (a[0] - b[0] < 0) return -1;
    else if (a[0] - b[0] > 0) return 1;
    else if (a[0] === b[0]) {
      return a[1] - b[1];
    }
  });

  let answer = 0;
  let totalTime = 0; // 총 흐른 시간
  let length = jobs.length;
  let waitRunTime = 0; // 프로세스들의 대기시간+실행시간의 합

  const minHeap = new Heap();
  minHeap.push(jobs.shift());
  totalTime += minHeap.minHeap[1][0];

  while (minHeap.minHeap[1] !== 0) {
    const next = minHeap.pop();

    if (totalTime - next[0] > 0) {
      waitRunTime += totalTime - next[0];
    }

    waitRunTime += next[1];
    // console.log(`waitRunTime: ${waitRunTime}`);

    totalTime += next[1];
    // console.log(`totalTime: ${totalTime}`);
    // console.log(minHeap.print());
    // let flag = true;
    let count = 0;

    jobs.forEach((job) => {
      if (job[0] <= totalTime) {
        count++;
        minHeap.push(job);
        // flag = false;
      }
    });

    for (let i = 0; i < count; i++) jobs.shift();

    if (minHeap.minHeap[1] === 0) {
      if (jobs.length !== 0) {
        const t = jobs.shift();
        minHeap.push(t);

        if (totalTime < t[0]) totalTime += t[0] - totalTime;
      }
    }
  }

  answer = Math.floor(waitRunTime / length);
  return answer;
}

console.log(
  solution([
    [24, 10],
    [18, 39],
    [34, 20],
    [37, 5],
    [47, 22],
    [20, 47],
    [15, 2],
    [15, 34],
    [35, 43],
    [26, 1],
  ])
);
