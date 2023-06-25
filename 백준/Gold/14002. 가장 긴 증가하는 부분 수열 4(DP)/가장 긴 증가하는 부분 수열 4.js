const fs = require("fs");
const input =  fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = +input[0];
const arr = input[1].split(" ").map((v) => +v);
const dp = Array.from({length : n}, () => 1);
const history = Array.from({length : n}, () => -1);
let answer = 1;
let maxIndex = 0;

for(let i = 0; i < n; i+=1){
  for(let j = i + 1; j <= n; j+=1){
    if(arr[j] > arr[i] && dp[i] + 1 > dp[j]){
      dp[j] = dp[i] + 1;
      history[j] = i;
      if(answer < dp[j]){
        answer = dp[j];
        maxIndex = j;
      }
    }
  }
}

const result = [];

while(maxIndex !== -1){
  result.push(arr[maxIndex]);
  maxIndex = history[maxIndex];
}

console.log(answer);
console.log(result.reverse().join(" "));
