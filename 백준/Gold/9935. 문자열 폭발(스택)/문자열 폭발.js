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

// 처음에 풀었을때 코드가 너무 느려서 수정함
// tmp와 boom을 비교할때 반복문을 썼었는데 그럴필요없음. 한번 터지고 나서 연속으로 또 터지려면 새로운 문자가 들어와야만 함
// 폭발이 일어나는지 확인하는 if문 조건에서 새로 들어온 문자 하나와 boom의 마지막 글자가 같은지만 확인함으로써 최적화 가능
