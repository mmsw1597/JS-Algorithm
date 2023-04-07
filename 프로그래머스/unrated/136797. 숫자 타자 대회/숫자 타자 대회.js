class Node{
    constructor(w, l, r, i){
        this.w = w;
        this.l = l;
        this.r = r;
        this.i = i;
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

function solution(numbers) {
    let answer = 0;
    const arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];
    const dp = Array.from(Array(13), () => Array(13).fill(Infinity));
    const d1 = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    const d2 = [[1, 1], [-1, -1], [1, -1], [-1, 1]];
    
    for(let y = 0; y<4; y++){
        for(let x = 0; x<3; x++){
            let start = arr[y][x];
            dp[start][start] = 1;
            for(let [dy, dx] of d1){
                let ny = dy + y;
                let nx = dx + x;
                
                if(ny >= 0 && ny < 4 && nx >= 0 && nx < 3){
                    let end = arr[ny][nx];
                    dp[start][end] = 2;
                }
            }
            
            for(let [dy, dx] of d2){
                let ny = dy + y;
                let nx = dx + x;
                
                if(ny >= 0 && ny < 4 && nx >= 0 && nx < 3){
                    let end = arr[ny][nx];
                    dp[start][end] = 3;
                }
            }
        }
    }
    
    for(let k = 1; k<=12; k++){
        for(let i = 1; i<=12; i++){
            for(let j = 1; j<=12; j++){
                if(dp[i][j] > dp[i][k] + dp[k][j])
                    dp[i][j] = dp[i][k] + dp[k][j];
            }
        }
    }
    let prev = null;
    
    numbers = numbers.split("").map((v, i) => {
        if(v === "*") return 10;
        else if(v === "#") return 12;
        else if(v === "0") return 11;
        else return +v;
    });
    
    const heap = new MinHeap();
    heap.insert(new Node(0, 4, 6, 0));
    const visit = {};
    
    for(let i = 1; i<=12; i++){
        visit[i] = {};
        for(let j = 1; j<=12; j++){
            visit[i][j] = {};
            for(let k = 0; k<numbers.length; k++){
                visit[i][j][k] = Infinity;
            }
        }
    }
    
    while(1){
        let {w, l ,r, i} = heap.remove();
        let target = numbers[i];
        if(i === numbers.length) return w;
        
        if(target === l && visit[l][r][i] > w + 1){
            visit[l][r][i] = w + 1;
            heap.insert(new Node(w + 1, l, r, i + 1));
        }
        else if(target === r && visit[l][r][i] > w + 1){
            visit[l][r][i] = w + 1;
            heap.insert(new Node(w + 1, l, r, i + 1));
        }
        else{
            let left = dp[l][target] + w;
            let right = dp[r][target] + w;   
            if(visit[target][r][i] > left){
                visit[target][r][i] = left;
                heap.insert(new Node(left, target, r, i + 1));
            }
            if(visit[l][target][i] > right){
                visit[l][target][i] = right;
                heap.insert(new Node(right, l, target, i + 1));
            }
        }
    }
    
    
    // 왼손 4 오른손 6 위에서 start
    // 제자리 1
    // 상하좌우 2
    // 대각선 3
    // 이외에는 최소경로
    // 대각선으로 이동가능하면 대각선이 이득
    return 1;
}