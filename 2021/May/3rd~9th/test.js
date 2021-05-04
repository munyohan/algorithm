class minHeap {
  constructor() {
    this.heap = [];
    this.size = 0;
  }

  insert(val) {
    this.heap.push(val);
    this.size++;

    let current = this.size - 1;

    while (current !== 0) {
      const parent = Math.floor(current / 2);

      if (this.heap[parent] > this.heap[current]) this.swap(parent, current);
      else break;
    }
  }

  pop() {
    if (this.size === 0) return null;
    const lastIndex = this.size - 1;
    this.swap(lastIndex, 0);
    const value = this.heap.pop();
    this.size--;

    let current = 0;

    while (current < lastIndex) {
      const leftChildIndex = current * 2 + 1;
      const rightChildIndex = current * 2 + 2;

      if (leftChildIndex > lastIndex) break;
      else if (rightChildIndex > lastIndex) {
        if (this.heap[current] > this.heap[leftChildIndex]) {
          this.swap(current, leftChildIndex);
          current = leftChildIndex;
        } else break;
      } else {
        let lessIndex = 0;

        if (this.heap[leftChildIndex] < this.heap[rightChildIndex])
          lessIndex = leftChildIndex;
        else lessIndex = rightChildIndex;

        if (this.heap[current] > this.heap[lessIndex]) {
          this.swap(current, lessIndex);
          current = lessIndex;
        } else break;
      }
    }

    return value;
  }

  swap(index1, index2) {
    let temp = this.heap[index1];
    this.heap[index1] = this.heap[index2];
    this.heap[index2] = temp;
  }
}

class ListNode {
  constructor(val, next) {
    this.val = val ? val : 0;
    this.next = next ? next : null;
  }
}

const mergeKLists = lists => {
  const answer = new ListNode(0);
  const heap = new minHeap();

  for (let i = 0; i < lists.length; i++) {
    let curNode = lists[i];
    while (curNode.next) {
      heap.insert(lists[i].val);
      curNode = lists[i].next;
    }
  }

  let minValue = heap.pop();
  while (minValue) {
    answer.next = minValue;
    minValue = heap.pop();
  }

  return answer;
};

console.log(
  mergeKLists([
    [1, 4, 5],
    [1, 3, 4],
    [2, 6],
  ])
);
