class Node {
  constructor(v, w) {
    this.v = v;
    this.w = w;
  }
}

class MinHeap {
  constructor() {
    this.heap = [null]; // 계산의 편의를 위해 첫번째 인덱스를 1로 두자. 0번째에는 더미값을 넣는다.
  }

  // heap의 구조를 다시 재조정하는 함수
  // n은 가장 마지막 노드 번호
  // i는 재조정 노드 번호
  heapify(n, i) {
    let smallest = i;
    let l = i * 2; //왼쪽 자식
    let r = i * 2 + 1; //오른쪽 자식

    //왼쪽 자식이 더 크면 현재 노드와 바꿔준다
    if (l <= n && this.heap[l].w < this.heap[smallest].w) smallest = l;

    //오른쪽 자식이 더 크면 현재 노드와 바꿔준다
    if (r <= n && this.heap[r].w < this.heap[smallest].w) smallest = r;

    //만약 자식 중 현재 노드보다 더 큰게 있다면
    if (smallest !== i) {
      this.swap(i, smallest); //두 노드를 서로 바꿔준다
      this.heapify(n, smallest); //바꾼 위치로 내려가서 거기서부터 다시 재조정한다.
    }
  }

  // 더미데이터 때문에 length 값은 노드 마지막 번호와 같지 않다. 1을 빼주는 것을 잊지 말자
  size() {
    return this.heap.length - 1;
  }

  // 배열 내에서 두 원소를 바꾸는 간단한 코드 작성법이다
  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  // heap에 원소를 삽입하는 함수
  // 추가 후 알맞은 위치로 옮겨야 한다.
  insert(x) {
    this.heap.push(x); //맨 끝에 삽입
    let i = this.heap.length - 1; //맨 끝 노드 번호. 1빼주는것에 유의
    let parent = Math.floor(i / 2); //추가된 노드의 부모 노드 번호

    // 재조정
    // 부모와 비교했을때 더 크면 올라가고 그렇지 않으면 반복을 종료한다
    while (i > 1 && this.heap[parent].w > this.heap[i].w) {
      this.swap(parent, i); // 부모와 서로 바꿔줌

      // i, parent 변수 모두 바꿔줘야함
      // i/2가 js에선 소수점도 남길 수 있기 때문에 Math.floor 해줘야함
      i = parent;
      parent = Math.floor(i / 2);
    }
  }

  // heap의 루트노드를 반환하고 다시 heap을 재조정하는 함수
  // MaxHeap의 경우 항상 원소 중 최댓값을 뱉어낸다
  remove() {
    const ret = this.heap[1]; //루트노드
    // 여기 매우 중요!!!!!!!!!!!!
    // 원소가 2개 밖에 없는데 this.heap[1] = this.heap.pop(); 실행해버리면 삭제가 안됨
    if (this.heap.length <= 2) this.heap = [null];
    else {
      this.heap[1] = this.heap.pop(); //맨 끝의 노드를 루트노드로 이동시킴
      this.heapify(this.heap.length - 1, 1); // 힙 재조정
    }
    return ret;
  }
}

const fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map((v) => +v));
let T = input[0];
let curInput = 1;
while (T) {
  T -= 1;
  const [n, m, t] = input[curInput++];
  const [s, g, h] = input[curInput++];
  const x = [];

  // 힙으로 다익스트라 구현할땐 n x n 배열 말고 n개 배열에 간선이 실제로 있는 곳만 표시하도록 graph를 선언하는게 편하다.
  const graph = Array.from({ length: n + 1 }, () => Array(0));
  const idx = curInput;
  for (; curInput < idx + m; curInput += 1) {
    let [u, v, w] = input[curInput];
    graph[u].push(new Node(v, w));
    graph[v].push(new Node(u, w));
  }

  const dijkstra = (start) => {
    const heap = new MinHeap();
    const map = Array.from({ length: n + 1 }, () => Infinity);
    // 이 부분 자꾸 헷갈리는듯
    // 처음에는 간선 가중치가 0인 노드를 힙에다가 집어넣어야 함
    map[start] = 0;
    heap.insert(new Node(start, 0));

    while (heap.size()) {
      const { v, w } = heap.remove();
      if (map[v] < w) continue;

      // 어짜피 모든 간선을 다 넣어봐야함
      // 그리고 디스트럭처링할때 변수명 새로 설정하는거 자꾸 까먹음
      for (let { v: nv, w: nw } of graph[v]) {
        let alt = map[v] + nw;
        if (map[nv] > alt) {
          map[nv] = alt;
          heap.insert(new Node(nv, map[nv]));
        }
      }
    }

    return map;
  };
  const idx2 = curInput;
  for (; curInput < idx2 + t; curInput += 1) {
    x.push(input[curInput]);
  }

  const distS = dijkstra(s);
  const distG = dijkstra(g);
  const distH = dijkstra(h);
  const result = [];
  for (let end of x) {
    if (distS[end] === Infinity) continue;
    if (distS[end] === distS[g] + distG[h] + distH[end]) result.push(end);
    else if (distS[end] === distS[h] + distH[g] + distG[end]) result.push(end);
  }

  console.log(result.sort((a, b) => a - b).join(" "));
}

// 특정한 최단 경로 문제와 유사하다
// 다익스트라 문제인거를 알고 푸니 할만한거 같다.
// 유형을 모르고 풀때 과연 다익스트라를 떠올릴 수 있을진 모르겠다.
