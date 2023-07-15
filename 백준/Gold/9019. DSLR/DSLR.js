class Queue{
  constructor(){
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  enqueue(v){
    this.queue[this.rear++] = v; 
  }

  dequeue(){
    const ret = this.queue[this.front];
    delete this.queue[this.front++];
    return ret;
  }

  size(){
    return this.rear - this.front;
  }
}
const fs = require("fs");
const input =  fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const T = +input[0];
let cnt = 1;
const result = [];

while(cnt <= T){
  let flag = false;
  let [start, target] = input[cnt++].split(" ").map(v => +v);
  const visit = new Array(10000);
  const dist =  new Array(10000).fill("");
  const queue = new Queue();
  queue.enqueue(start);
  visit[start] = true;
  
  while(!flag && queue.size()){   
      const n = queue.dequeue();
    
      const D = (n * 2) % 10000;
      const S = (n === 0) ? 9999 : n - 1;
      const L = (n === 0) ? 0 : Math.floor(n % 1000) * 10 + Math.floor(n / 1000);
      const R = (n === 0) ? 0 : Math.floor(n % 10) * 1000 + Math.floor(n / 10);

      if(!visit[D]){
        queue.enqueue(D);
        visit[D] = true;
        dist[D] = dist[n] + "D";
      }
      if(!visit[S]){
        queue.enqueue(S);
        visit[S] = true;
        dist[S] = dist[n] + "S";
      }
      if(!visit[L]){
        queue.enqueue(L);
        visit[L] = true;
        dist[L] = dist[n] + "L";
      }
      if(!visit[R]){
        queue.enqueue(R);
        visit[R] = true;
        dist[R] = dist[n] + "R";
      }

      if(visit[target]){
        result.push(dist[target]);
        flag = true;
        break;
      }
  }
}

result.forEach(v => console.log(v));