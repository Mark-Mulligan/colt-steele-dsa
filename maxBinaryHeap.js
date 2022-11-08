class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(val) {
    this.values.push(val);
    let currentIndex = this.values.length - 1;
    let parentIndex = Math.floor((currentIndex - 1) / 2);
    let temp;

    while (currentIndex !== 0 && this.values[currentIndex] > this.values[parentIndex]) {
      temp = this.values[parentIndex];
      this.values[parentIndex] = this.values[currentIndex];
      this.values[currentIndex] = temp;

      currentIndex = parentIndex;
      parentIndex = Math.floor((currentIndex - 1) / 2);
    }

    return this.values;
  }

  bubbleUp() {
    let index = this.values.length - 1;
    const element = this.values[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      if (element <= parent) break;
      this.values[parentIndex] = element;
      this.values[index] = parent;
      index = parentIndex;
    }
  }

  insert2(element) {
    this.values.push(element);
    this.bubbleUp();
    return this.values;
  }
}

const heap = new MaxBinaryHeap();
heap.insert2(18);
heap.insert2(27);
heap.insert2(39);
heap.insert2(12);
heap.insert2(33);
heap.insert2(11);
console.log(heap.insert2(50));
