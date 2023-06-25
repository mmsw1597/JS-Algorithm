class Node{
  constructor(v, p){
    this.v = v;
    this.p = p;
  }
}

const fs = require("fs");
const input = +fs.readFileSync("/dev/stdin").toString().trim();
const dp = Array.from({length : input + 1}, () => new Node(Infinity, Infinity));
dp[dp.length - 1].v = 0;

for(let i = dp.length - 1; i>= 1; i--){
  const {v} = dp[i];
  
  if(i % 3 === 0 && dp[i / 3].v > v + 1) {
    dp[i / 3].v = dp[i].v + 1;
    dp[i / 3].p = i;
  }
  if(i % 2 === 0 && dp[i/2].v > v + 1) {
    dp[i / 2].v = dp[i].v + 1;
    dp[i / 2].p = i;
  }
  if(dp[i - 1].v > v + 1) {
    dp[i - 1].v = dp[i].v + 1;
    dp[i - 1].p = i;
  }
}

const result = [1];
let index = 1;
while(dp[index].p !== Infinity){
  result.push(dp[index].p);
  index = dp[index].p;
}

console.log(dp[1].v);
console.log(result.reverse().join(" "));