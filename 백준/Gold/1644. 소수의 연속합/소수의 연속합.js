const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map((v) => +v));

const [n] = input.shift();
const arr = Array(n + 1).fill(true);
const primeArr = Array(0);

for (let i = 2; i * i <= n; i += 1) {
  if (arr[i]) {
    for (let j = i * i; j <= n; j += i) {
      arr[j] = false;
    }
  }
}

for (let i = 2; i <= n; i += 1) {
  if (arr[i]) primeArr.push(i);
}

let lt = 0;
let rt = 1;
let sum = primeArr[lt];
let answer = 0;

while (lt < primeArr.length) {
  if (sum === n) {
    answer += 1;
    sum -= primeArr[lt];
    lt += 1;
  } else if (sum > n) {
    sum -= primeArr[lt];
    lt += 1;
  } else {
    if (rt === primeArr.length) break;
    sum += primeArr[rt];
    rt += 1;
  }
  if (lt === rt) rt += 1;
}

console.log(answer);