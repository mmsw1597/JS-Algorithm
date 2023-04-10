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
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [n, m] = input[0].split(" ").map((v) => +v);
let start = +input[1];
const result = [];
const graph = Array.from({ length: n + 1 }, () => Array(0)); // 특정 노드에서 다른 노드로 가는 간선을 모두 저장
const map = Array.from({ length: n + 1 }, () => Infinity);
const heap = new MinHeap();

for (let i = 2; i < input.length; i++) {
  let [u, v, w] = input[i].split(" ").map((v) => +v);
  graph[u].push(new Node(v, w));
}

map[start] = 0; // 시작 노드는 거리를 0으로 설정
heap.insert(new Node(start, 0));

// heap이 빌때까지 반복
while (heap.size()) {
  let { v, w } = heap.remove();
  if (w > map[v]) continue; // heap에서 꺼낸 간선의 가중치가 현재 계산한 거리보다 크면 건너뛴다.

  //각 간선에 연결된 모든 노드에 대하여 최단거리를 갱신한다.
  for (let { v: nv, w: nw } of graph[v]) {
    //해당 간선을 경유하여 특정 노드에 도착할때 최단거리가 더 짧다면 갱신한다.
    let alt = map[v] + nw;
    if (alt < map[nv]) {
      map[nv] = alt;
      heap.insert(new Node(nv, map[nv]));
    }
  }
}

for (let i = 1; i <= n; i++) {
  let k = map[i] === Infinity ? "INF" : map[i];
  result.push(k);
}
console.log(result.join("\n"));

// heap을 사용안한 다익스트라의 시간 복잡도는 O(V^2)
// heap을 사용한다면 선형적으로 최소 경로를 찾는 시간 O(V)가 O(logE)로 바뀐다. 그리고 모든 간선에 대해 힙 삭제 연산이 일어나므로  O(ElogE) 의 시간복잡도를 가진다.
// 중복 간선을 포함하지 않는다면 간선의 개수는 최대 V(V - 1)개다. 따라서 logE < log(V ^ 2) 라고 볼 수 있고 log(V^2)는 2logV이므로 O(ElogV)라고 볼 수 있다.
// 이 문제는 중복 간선을 고려하므로 O(ElogE)이다.
// 다익스트라는 가중치가 음수인 간선이 있으면 사용할 수 없다. 그럴땐 벨만 포드 알고리즘을 사용해야 한다.
