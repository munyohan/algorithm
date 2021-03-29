"use strict";

function solution(operations) {
  class MinHeap {
    constructor() {
      this.arr = [];
      this.lastIndex = 0;
    }

    pop() {
      if (this.lastIndex === 0) return 0;

      this.arr[1] = this.arr[this.lastIndex--];

      let curIndex = 1;
      while (curIndex <= this.lastIndex) {
        let leftChildIndex = curIndex * 2;
        let rightChildIndex = curIndex * 2 + 1;

        let targetIndex = curIndex;
        if (
          leftChildIndex <= this.lastIndex &&
          this.arr[leftChildIndex] < this.arr[curIndex]
        )
          targetIndex = leftChildIndex;

        if (
          rightChildIndex <= this.lastIndex &&
          this.arr[rightChildIndex] < this.arr[leftChildIndex]
        )
          targetIndex = rightChildIndex;

        if (curIndex === targetIndex) break;

        let temp = this.arr[curIndex];
        this.arr[curIndex] = this.arr[targetIndex];
        this.arr[targetIndex] = temp;

        curIndex = targetIndex;
      }

      const result = [];

      for (let i = 1; i <= this.lastIndex; i++) {
        result.push(this.arr[i]);
      }

      return result;
    }

    push(num) {
      this.arr[++this.lastIndex] = num;

      let curIndex = this.lastIndex;
      while (curIndex >= 1) {
        let parentIndex = curIndex >> 1;

        if (this.arr[curIndex] < this.arr[parentIndex]) {
          let temp = this.arr[curIndex];
          this.arr[curIndex] = this.arr[parentIndex];
          this.arr[parentIndex] = temp;
        } else break;

        curIndex = parentIndex;
      }
    }

    peek() {
      if (this.lastIndex === 0) return 0;
      else return this.arr[1] - 0;
    }

    print() {
      let result = "";

      for (let i = 1; i <= this.lastIndex; i++)
        result += ` ${i}: ${this.arr[i]} |`;

      console.log(result);
    }
  }

  class MaxHeap {
    constructor() {
      this.arr = [];
      this.lastIndex = 0;
    }

    pop() {
      if (this.lastIndex === 0) return 0;

      this.arr[1] = this.arr[this.lastIndex--];

      let curIndex = 1;
      while (curIndex <= this.lastIndex) {
        let leftChildIndex = curIndex * 2;
        let rightChildIndex = curIndex * 2 + 1;

        let targetIndex = curIndex;
        if (
          leftChildIndex <= this.lastIndex &&
          this.arr[leftChildIndex] > this.arr[curIndex]
        )
          targetIndex = leftChildIndex;

        if (
          rightChildIndex <= this.lastIndex &&
          this.arr[rightChildIndex] > this.arr[leftChildIndex]
        )
          targetIndex = rightChildIndex;

        if (curIndex === targetIndex) break;

        let temp = this.arr[curIndex];
        this.arr[curIndex] = this.arr[targetIndex];
        this.arr[targetIndex] = temp;

        curIndex = targetIndex;
      }

      const result = [];

      for (let i = 1; i <= this.lastIndex; i++) {
        result.push(this.arr[i]);
      }

      return result;
    }

    push(num) {
      this.arr[++this.lastIndex] = num;

      let curIndex = this.lastIndex;
      while (curIndex >= 1) {
        let parentIndex = curIndex >> 1;

        if (this.arr[curIndex] > this.arr[parentIndex]) {
          let temp = this.arr[curIndex];
          this.arr[curIndex] = this.arr[parentIndex];
          this.arr[parentIndex] = temp;
        } else break;

        curIndex = parentIndex;
      }
    }

    peek() {
      if (this.lastIndex === 0) return 0;
      else return this.arr[1] - 0;
    }

    print() {
      let result = "";

      for (let i = 1; i <= this.lastIndex; i++)
        result += ` ${i}: ${this.arr[i]} |`;

      console.log(result);
    }
  }

  let answer = [];
  let minHeap = new MinHeap();
  let maxHeap = new MaxHeap();

  for (const operation of operations) {
    const [command, data] = operation.split(" ");

    switch (command) {
      case "I":
        minHeap.push(Number(data));
        maxHeap.push(Number(data));
        break;

      case "D":
        if (data === "-1") {
          const newArr = minHeap.pop();
          maxHeap = new MaxHeap();
          if (newArr === 0) break;

          newArr.forEach((num) => {
            maxHeap.push(Number(num));
          });
        } else if (data === "1") {
          const newArr = maxHeap.pop();
          console.log(newArr);
          minHeap = new MinHeap();

          if (newArr === 0) break;

          newArr.forEach((num) => {
            minHeap.push(Number(num));
          });
        } else {
          throw Error("Wrong operation !");
        }
        break;

      default:
        throw Error("Wrong operation !");
    }
  }

  minHeap.print();
  maxHeap.print();

  answer = [maxHeap.peek(), minHeap.peek()];

  return answer;
}

console.log(
  solution(["I 0", "I -5643", "I 123", "I 123", "I 0", "I 24", "D 1"])
);
// console.log(
//   solution([
//     "I -45",
//     "I 653",
//     "D 1",
//     "I -642",
//     "I 45",
//     "I 97",
//     "D 1",
//     "D -1",
//     "I 333",
//   ])
// );
