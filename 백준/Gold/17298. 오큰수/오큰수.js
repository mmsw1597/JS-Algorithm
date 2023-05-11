const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map((v) => +v));

const [n] = input[0];
const arr = input[1];
let res = Array(n).fill(-1);
let stk = [];

for (let i = 0; i < n; i += 1) {
  while (stk.length && arr[i] > arr[stk[stk.length - 1]]) {
    let idx = stk.pop();
    res[idx] = arr[i];
  }
  stk.push(i);
}

console.log(res.join(" "));

// 스택을 써서 풀면 된다.
// 처음에 스택에 값과 인덱스를 모두 넣엇는데 그럴 필요 없이 인덱스만 넣어도 해결 가능하다.
