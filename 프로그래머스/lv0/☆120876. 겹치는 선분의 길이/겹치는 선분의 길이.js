function solution(lines) {
  let answer = 0;
  let stack = [];
  let stk = [];

  for (let [start, end] of lines) {
    stack.push(["s", start]);
    stack.push(["e", end]);
  }

  stack.sort((a, b) => {
    return a[1] - b[1];
  });

  for (let [type, x] of stack) {
    if (type === "s") stk.push(x);
    else {
      if (stk.length !== 2) stk.pop();
      else answer += x - stk.pop();
    }
  }

  return answer;
}

// 꽤나 고난했던 문제..
// 3개 겹치는것만 조심
