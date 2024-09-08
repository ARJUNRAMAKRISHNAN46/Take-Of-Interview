class Heap {
  constructor() {
    this.heap = [];
  }

  parentIndex(i) {
    return Math.floor((i - 1) / 2);
  }

  leftChild(i) {
    return i * 2 + 1;
  }

  rightChild(i) {
    return i * 2 + 2;
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp(this.heap.length - 1);
  }

  heapifyUp(index) {
    const parent = this.parentIndex(index);
    if (index > 0 && this.heap[parent] > this.heap[index]) {
      this.swap(index, parent);
    }
  }

  heapifyDown(index) {
    const leftChild = this.leftChild(index);
    const rightChild = this.rightChild(index);
    let largest = index;
    if (
      leftChild < this.heap.length &&
      this.heap[leftChild] < this.heap[largest]
    ) {
      largest = leftChild;
    }

    if (
      rightChild < this.heap.length &&
      this.heap[rightChild] < this.heap[largest]
    ) {
      largest = rightChild;
    }

    if (index !== largest) {
      this.swap(index, largest);
      this.heapifyDown(largest);
    }
  }

  extractMax() {
    if (this.heap.length === 0) {
      return "heap is empty...!";
    }

    const max = this.heap[0];

    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);

    return max;
  }

  buildHeap(arr) {
    this.heap = arr;
    for (let i = Math.floor(this.heap.length / 2) - 1; i >= 0; i--) {
      this.heapifyDown(i);
    }
  }

  heapSort(arr) {
    this.buildHeap(arr);
    for (let i = arr.length - 1; i >= 0; i--) {
      this.swap(0, i);
      this.heap.length--;
      this.heapifyDown(0);
    }

    return arr;
  }
}

const heap = new Heap();

// Insert values into the heap
heap.insert(12);
heap.insert(11);
heap.insert(13);
heap.insert(5);
heap.insert(6);
heap.insert(7);

console.log("Heap after insertions:", heap.heap);

// Extract maximum value from the heap
console.log("Extracted max:", heap.extractMax());
console.log("Heap after extracting max:", heap.heap);

// Sorting an array using heap sort
const arr = [12, 11, 13, 5, 6, 7];
console.log("Original array:", arr);

heap.heapSort(arr);
console.log("Sorted array:", arr);
