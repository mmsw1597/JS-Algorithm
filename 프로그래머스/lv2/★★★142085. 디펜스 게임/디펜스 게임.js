class MaxHeap {
  constructor() {
    this.heap = [null];
  }

  size() {
    return this.heap.length - 1;
  }

  getMin() {
    return this.heap[1] ? this.heap[1] : null;
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  heappush(value) {
    this.heap.push(value);
    let curIdx = this.heap.length - 1;
    let parIdx = (curIdx / 2) >> 0;

    while (curIdx > 1 && this.heap[parIdx] < this.heap[curIdx]) {
      this.swap(parIdx, curIdx);
      curIdx = parIdx;
      parIdx = (curIdx / 2) >> 0;
    }
  }

  heappop() {
    const min = this.heap[1];
    if (this.heap.length <= 2) this.heap = [null];
    else this.heap[1] = this.heap.pop();

    let curIdx = 1;
    let leftIdx = curIdx * 2;
    let rightIdx = curIdx * 2 + 1;

    if (!this.heap[leftIdx]) return min;
    if (!this.heap[rightIdx]) {
      if (this.heap[leftIdx] > this.heap[curIdx]) {
        this.swap(leftIdx, curIdx);
      }
      return min;
    }

    while (
      this.heap[leftIdx] > this.heap[curIdx] ||
      this.heap[rightIdx] > this.heap[curIdx]
    ) {
      const minIdx =
        this.heap[leftIdx] < this.heap[rightIdx] ? rightIdx : leftIdx;
      this.swap(minIdx, curIdx);
      curIdx = minIdx;
      leftIdx = curIdx * 2;
      rightIdx = curIdx * 2 + 1;
    }

    return min;
  }
}

function solution(n, k, enemy) {
  let answer = 0;
  const heap = new MaxHeap();
  for (let v of enemy) {
    heap.heappush(v);
    n -= v;
    if (n < 0) {
      if (k) {
        n += heap.heappop();
        k--;
      } else {
        break;
      }
    }
    if (n < 0) break;
    answer++;
  }

  return answer;
}

// 드디어 만난 Heap 문제
// Heap 구현 자체를 잘못해서 삽질을 좀 많이했다
