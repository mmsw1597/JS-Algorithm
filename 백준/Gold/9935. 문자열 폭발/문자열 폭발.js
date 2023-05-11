const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const str = input[0].trim();
const boom = input[1].trim();
const stk = [];

for (let x of str) {
  stk.push(x);

  if (x === boom[boom.length - 1]) {
    let tmp = stk.slice(stk.length - boom.length).join("");
    if (tmp === boom) {
      for (let i = 0; i < boom.length; i += 1) stk.pop();
    }
  }
}

if (stk.length) console.log(stk.join(""));
else console.log("FRULA");
