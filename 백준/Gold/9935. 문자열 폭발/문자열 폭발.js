const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const str = input[0].trim();
const boom = input[1].trim();
const stk = [];

for (let x of str) {
  stk.push(x);

  if (stk.length >= boom.length) {
    let tmp = stk.slice(stk.length - boom.length).join("");
    while (stk.length >= boom.length && tmp === boom) {
      for (let i = 0; i < boom.length; i += 1) stk.pop();
      tmp = stk.slice(stk.length - boom.length).join("");
    }
  }
}

if (stk.length) console.log(stk.join(""));
else console.log("FRULA");