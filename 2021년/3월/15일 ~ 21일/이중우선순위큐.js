"use strict";

function solution(operations) {
  class MinHeap {
    constructor() {
      this.arr = [];
      this.lastIndex = 0;
    }

    pop() {
      if (this.lastIndex === 0) throw Error("Heap is empty !");

      const minValue = this.arr[1];
      this.arr[1] = this.arr[this.lastIndex];
      this.arr[this.lastIndex--] = 0;

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
      return this.arr[1];
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

  for (const operation of operations) {
    const [command, data] = operation.split(" ");

    switch (command) {
      case "I":
        minHeap.push(data);
        break;

      case "D":
        if (data === "-1") {
          minHeap.pop();
        } else if (data === "1") {
          let trash = 0;
        } else {
          throw Error("Wrong operation !");
        }
        break;

      default:
        throw Error("Wrong operation !");
    }
  }

  minHeap.print();

  return answer;
}

solution(["I 16", "I 4", "I -5", "D -1"]);
