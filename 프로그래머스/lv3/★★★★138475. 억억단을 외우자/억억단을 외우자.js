class Node {
  constructor(v, i) {
    this.value = v;
    this.index = i;
  }
}

class MaxHeap {
  constructor() {
    this.heap = [null]; // 계산의 편의를 위해 첫번째 인덱스를 1로 두자. 0번째에는 더미값을 넣는다.
  }

  // heap의 구조를 다시 재조정하는 함수
  // n은 가장 마지막 노드 번호
  // i는 재조정 노드 번호
  heapify(n, i) {
    let largest = i;
    let l = i * 2; //왼쪽 자식
    let r = i * 2 + 1; //오른쪽 자식

    //왼쪽 자식이 더 크면 현재 노드와 바꿔준다
    if (l <= n) {
      if (this.heap[l].value > this.heap[largest].value) largest = l;
      else if (
        this.heap[l].value === this.heap[largest].value &&
        this.heap[l].index < this.heap[largest].index
      )
        largest = l;
    }
    //오른쪽 자식이 더 크면 현재 노드와 바꿔준다
    if (r <= n) {
      if (this.heap[r].value > this.heap[largest].value) largest = r;
      else if (
        this.heap[r].value === this.heap[largest].value &&
        this.heap[r].index < this.heap[largest].index
      )
        largest = r;
    }

    //만약 자식 중 현재 노드보다 더 큰게 있다면
    if (largest !== i) {
      this.swap(i, largest); //두 노드를 서로 바꿔준다
      this.heapify(n, largest); //바꾼 위치로 내려가서 거기서부터 다시 재조정한다.
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
    let parent = Math.floor(this.heap.length / 2); //추가된 노드의 부모 노드 번호

    // 재조정
    // 부모와 비교했을때 더 크면 올라가고 그렇지 않으면 반복을 종료한다
    while (
      i > 1 &&
      (this.heap[parent].value < this.heap[i].value ||
        (this.heap[parent].value === this.heap[i].value &&
          this.heap[parent].index > this.heap[i].index))
    ) {
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

function solution(e, starts) {
  let answer = [];
  const map = {};
  const heap = new MaxHeap();

  for (let i = 1; i <= e; i++) {
    map[i] = 1;
  }

  for (let i = 2; i <= e; i++) {
    map[i] += 1;
    for (let j = i + i; j <= e; j += i) {
      map[j] += 1;
    }
  }

  for (let i = 1; i <= e; i++) {
    heap.insert(new Node(map[i], i));
  }

  const cStarts = starts.map((v, i) => [v, i]);
  cStarts.sort((a, b) => a[0] - b[0]);
  let { value: curV, index: curI } = heap.remove();
  let result = [];
  let cnt = 0;

  for (let s of cStarts) {
    if (s[0] <= curI) result.push([curI, s[1]]);
    else {
      while (s[0] > curI) {
        let { value: tmpV, index: tmpI } = heap.remove();

        curV = tmpV;
        curI = tmpI;
      }
      result.push([curI, s[1]]);
    }
  }

  answer = result.sort((a, b) => a[1] - b[1]).map((v) => v[0]);
  return answer;
}

// 우선순위 큐를 두 가지 기준으로 정렬해야하는 문제
// 본래의 인덱스를 기억하고 정렬해야하는 경우에 대해 더 좋은 코드는 해쉬를 사용하는 것. s의 원소는 중복이 없음
// 큐 구현에 문제가 있는지, 알고리즘에 문제가 있는지 판단이 안되서 오래 걸렸다.
// 다른 사람 코드보면 굳이 큐를 구현안해도 되는 거 같다. e 크기의 배열을 선언하면 내림차 순으로 정렬하고 차례대로 비교하면서 보면 되기때문
