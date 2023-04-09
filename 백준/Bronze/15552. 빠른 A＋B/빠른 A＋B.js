const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let count = +input[0];
let result = [];

for (let i = 1; i < count + 1; i++) {
  let [a, b] = input[i].split(" ");
  result.push(+a + +b);
}
console.log(result.join("\n"));

// 백준에서의 JS 입출력
