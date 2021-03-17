"use strict";

function solution(operations) {
  class MinHeap {
    constructor() {
      this.arr = [];
      this.lastIndex = 0;
    }

    pop() {
      if (this.lastIndex === 0) return null;

      const minValue = this.arr[1];
      this.arr[1] = this.arr[this.lastIndex];
      this.arr[this.lastIndex--] = null;

      let curIndex = 1;
      while (curIndex <= this.lastIndex) {
        let leftChildIndex = curIndex * 2;
        let rightChildIndex = curIndex * 2 + 1;

        let targetIndex = 0;
        if (this.arr[leftChildIndex] < this.arr[rightChildIndex])
          targetIndex = leftChildIndex;
        else targetIndex = rightChildIndex;

        if (this.arr[curIndex] <= this.arr[targetIndex]) break;

        let temp = this.arr[curIndex];
        this.arr[curIndex] = this.arr[targetIndex];
        this.arr[targetIndex] = temp;

        curIndex = targetIndex;
      }

      return minValue;
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

      this.arr.forEach((num) => {
        result += num + " ";
      });

      console.log(result);
    }
  }

  class MaxHeap {
    constructor() {
      this.arr = [];
      this.lastIndex = 0;
    }

    pop() {
      if (this.lastIndex === 0) return null;

      const maxValue = this.arr[1];
      this.arr[1] = this.arr[this.lastIndex];
      this.arr[this.lastIndex--] = null;

      let curIndex = 1;
      while (curIndex <= this.lastIndex) {
        let leftChildIndex = curIndex * 2;
        let rightChildIndex = curIndex * 2 + 1;

        let targetIndex = 0;
        if (this.arr[leftChildIndex] > this.arr[rightChildIndex])
          targetIndex = leftChildIndex;
        else targetIndex = rightChildIndex;

        if (this.arr[curIndex] >= this.arr[targetIndex]) break;

        let temp = this.arr[curIndex];
        this.arr[curIndex] = this.arr[targetIndex];
        this.arr[targetIndex] = temp;

        curIndex = targetIndex;
      }

      return maxValue;
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

      this.arr.forEach((num) => {
        result += num + " ";
      });

      console.log(result);
    }
  }

  let answer = [];
  const minHeap = new MinHeap();
  const maxHeap = new MaxHeap();

  for (const operation of operations) {
    const [command, data] = operation.split(" ");

    switch (command) {
      case "I":
        minHeap.push(data);
        maxHeap.push(data);
        break;

      case "D":
        if (data === "-1") {
          minHeap.pop();
        } else if (data === "1") {
          maxHeap.pop();
        } else {
          throw Error("Wrong operation !");
        }
        break;

      default:
        throw Error("Wrong operation !");
    }
  }

  minHeap.print();

  answer = [maxHeap.peek(), minHeap.peek()];

  return answer;
}

console.log(solution(["I 16", "D 1"]));
