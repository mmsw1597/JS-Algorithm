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

// 에라토스테네스의 체의 시간 복잡도는 O(Nlog(logN)) 이라고 한다. 증명은 테일러 급수 등이 활용되어 복잡하다고 한다.
// primeArr[i]가 true이면 i를 제외한 i의 배수는 모두 false로 만든다.
// 이후 i의 배수는 모두 처리했으므로 i+1을 할때에는 (i+1) * k (k < i + 1) 는 처리할 필요가 없다. 따라서 (i+1) * (i+1)부터 시작
// 이러한 이유로 i * i > n 이면 더 이상 진행할 필요가 없어지므로 반복 종료
