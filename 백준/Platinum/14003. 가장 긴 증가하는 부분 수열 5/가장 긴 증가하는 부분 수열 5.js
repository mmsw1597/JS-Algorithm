const fs = require("fs");
const input =  fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = +input[0];
const arr = input[1].split(" ").map((v) => +v);
const dp = Array.from({length : n}, () => 1);
const list = [];

let answer = 1;
let prev = 0;
function findLowerBound(target){
  let lt = 0;
  let rt = list.length - 1;
  let mid = null;
  let ret = null;

  while(lt <= rt){
    mid = Math.floor((lt + rt) / 2);
    if(list[mid] >= target){
      rt = mid - 1;
      ret = mid;
    }else{
      lt = mid + 1;
    }
  }

  return ret;
}

for(let i = 0; i < n; i++){
  if(!list.length) list.push(arr[i]);
  else if(list[list.length - 1] < arr[i]) {
    list.push(arr[i]);
    dp[i] = list.length;
  }
  else{
    let index = findLowerBound(arr[i]);
    list[index] = arr[i];
    dp[i] = index + 1;
  }

  if(answer < dp[i]){
    prev = i;
    answer = dp[i];
  }
}

const result = [arr[prev]];

for(let i = prev - 1; i>=0; i--){
  if(arr[i] < arr[prev] && dp[prev] === dp[i] + 1){
    result.push(arr[i]);
    prev = i;
  }
}

console.log(answer);
console.log(result.reverse().join(" "));