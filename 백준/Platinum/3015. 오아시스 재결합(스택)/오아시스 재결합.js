class Node {
  constructor(v, c) {
    this.v = v;
    this.c = c;
  }
}

const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => +v);

const n = input.shift();
const stack = [];
let res = 0;

for (let i = 0; i < n; i += 1) {
  let v = input[i];
  let c = 0;

  while (stack.length && input[i] > stack[stack.length - 1].v) {
    stack.pop();
    res += 1;
  }
  if (stack.length && input[i] === stack[stack.length - 1].v) {
    c = stack[stack.length - 1].c + 1;
    res += c;
  }
  if (stack.length - c > 0) res += 1;

  stack.push(new Node(input[i], c));
}

console.log(res);

// 스택을 떠올릴 수 있느냐, 없느냐가 관건. 스택 관련 문제를 많이 풀다보면 되지않을까?
// 스택으로 푸는 방법을 정해도 구현 자체에서 꽤 난항을 겪었다.
// 각종 예외처리, 엣지 케이스를 생각할 수 있냐가 관건이다.

// 나는 이렇게 풀었다.
// 스택은 기본적으로 내림차 순으로만 쌓이도록 한다. 맨 윗층 값과 같은 값이어도 쌓이게끔 한다.
// 이때 쌓이면서 서로 볼 수 있는 쌍이 하나 늘어나는 것이므로 답을 1 추가해준다. 단, 스택이 비어있는 경우는 증가시키면 안된다.
// 이때 맨 윗층보다 큰 값이 들어오게 되는 경우, 해당 값보다 같거나 더 큰 값이 스택의 맨위에 올때까지 pop하면서 답을 1 증가시켜준다.
// 여기까지만 생각하면 50%는 완성한거다. 이제 예외케이스에 대해 생각해보자.

// 스택의 맨 윗층과 같은 값이 들어오는 경우에 대해서 생각을 해봐야한다.
// 예를들어 4 - 3 - 2 - 2 - 2 의 경우 같은 값 끼리는 서로 볼 수 있고 다른 값이 나타난 순간 그 다음 값은 볼 수 없다. 즉, 맨 마지막 2는 3까지는 다 볼 수 있고 4는 볼 수 없다.
// 따라서 스택 값마다 자신이 중복 값중 몇번째인가를 알아야한다. 그래서 난 스택에 객체를 넣는 식으로 2가지 값을 참조할 수 있도록 했다.
// 그래서 만약 스택의 맨 위층과 같은 값이라면 맨 윗층이 2번째 중복값일 경우 답에 +2을 해주면 된다. 3번째면 +3
// 여기까지 생각하면 80%는 완성

// 마지막 예외에 대해서 생각해보자
// 모든 값이 전부 동일한 값만 계속 들어온다고 생각해보자
// 나는 값이 들어올때마다 단순히 답에 +1을 해주었다. 이는 해당 케이스의 경우 중복값 처리와 중복으로 답을 세는 꼴이 된다.
// 4-4-4-4-4 의 경우 중복값 처리만 해줘도 그게 답이된다 (1 + 2 + 3 + 4)
// 즉, 중복값을 제외하고 스택 밑층에 다른 더 큰 값이 있는 경우는 쌍이 추가로 생기는 거기 때문에 +1을 해주는게 맞지만 (4-3-2-2-2)
// 중복값만 스택에 있는 경우는 +1을 해주면 안된다. (4-4-4-4-4)
// 따라서 스택의 크기에 중복값의 개수를 뺀 것이 0보다 큰 경우에만 +1을 해주면 된다.
