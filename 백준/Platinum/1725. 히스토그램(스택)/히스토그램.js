const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => +v);

const n = input.shift();
const stack = [];
const res = Array(n).fill(0);

for (let i = 0; i < n; i += 1) {
  while (stack.length && input[i] < input[stack[stack.length - 1]]) {
    const idx = stack.pop();
    res[idx] = i - idx;
  }
  stack.push(i);
}

while (stack.length) {
  const idx = stack.pop();
  res[idx] = n - idx;
}

for (let i = n - 1; i >= 0; i -= 1) {
  while (stack.length && input[i] < input[stack[stack.length - 1]]) {
    const idx = stack.pop();
    res[idx] += Math.abs(i - idx + 1);
  }
  stack.push(i);
}

while (stack.length) {
  const idx = stack.pop();
  res[idx] += idx;
}

let max = -1;

for (let i = 0; i < n; i += 1) {
  if (max < res[i] * input[i]) max = res[i] * input[i];
}

console.log(max);

// 여러가지 방법으로 풀 수 있는 문제라고 한다. 나는 스택으로 풀었고, 스택으로 풀라고 사전에 알림 받은 상태로 풀었다.
// 문제를 푸는 데에 핵심은 각 막대마다 자기 자신을 높이로 삼았을때 얻을 수 있는 직사각형 넓이를 구하면 된다.
// 단, O(n^2)의 시간복잡도 이상으로는 시간초과가 걸리므로 완전탐색으로는 불가능하다.
// 따라서 스택을 써서 배열을 순회함과 동시에 해답을 찾을 수 있도록 O(N)의 시간복잡도로 풀면 된다.

// 난 이렇게 풀었다.
// 일단 배열을 순회하면서 i번째의 막대를 높이로 삼았을때 가질 수 있는 직사각형의 밑변 길이를 구하는 것을 목표로 하자. 해당 정보를 담은 배열을 res라고 하자.
// 스택에는 항상 막대의 높이의 오름차 순으로만 쌓을 수 있도록 한다. 그리고 스택에 넣는 값은 막대의 인덱스로 설정.
// 만약 i번째 막대의 높이가 스택의 가장 위에 있는 높이보다 작을경우 스택에서 pop하여 idx를 얻은 후 res[idx]에 i - idx를 더해준다.
// 현재까지 res에 담긴 값의 의미가 뭐냐면 해당 막대의 오른쪽 방향만 고려했을때 얻을 수 있는 밑변 길이다.

// 따라서 왼쪽 방향으로의 밑변 길이도 얻도록 배열을 반대 방향으로 한번 더 순회해준다.
// 이렇게 res를 구한뒤 높이 * 밑변의 최대를 구하면 답이된다.
// 스택으로 풀 수 있다는 생각을 하는게 어려운 문제인거 같고 한번 스택인거를 알면 이후로는 할만하다.
