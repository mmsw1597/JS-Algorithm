function solution(expression) {
  let answer = [];
  expression = expression.replace(/\-/g, "&");
  let op = [...new Set(expression.match(/[^0-9]/g))];
  const visit = Array.from({ length: op.length }, () => false);
  const tmp = [];
  const ch = "*";

  function cal(copy, type) {
    if (type === "*") {
      while (copy.includes(type)) {
        copy = copy.replace(/-?\d+\*-?\d+/, (match) => {
          const piece = match.split("*");
          return piece[0] * piece[1];
        });
      }
    } else if (type === "+") {
      while (copy.includes(type)) {
        copy = copy.replace(/-?\d+\+-?\d+/, (match) => {
          const piece = match.split("+");
          return +piece[0] + +piece[1];
        });
      }
    } else {
      while (copy.includes(type)) {
        copy = copy.replace(/-?\d+\&-?\d+/, (match) => {
          const piece = match.split("&");
          return piece[0] - piece[1];
        });
      }
    }

    return copy;
  }

  function DFS(level) {
    if (level === op.length) {
      let copy = expression;
      for (let x of tmp) {
        copy = cal(copy, x);
      }
      answer.push(Math.abs(+copy));
    }

    for (let i = 0; i < op.length; i++) {
      if (!visit[i]) {
        visit[i] = true;
        tmp.push(op[i]);
        DFS(level + 1);
        visit[i] = false;
        tmp.pop();
      }
    }
  }
  DFS(0);

  return Math.max(...answer);
}

// 정규표현식 문제
// 순차적으로 계산해야 하므로 g 플래그는 삭제
// 정규표현식에 변수를 넣으려면 +, -, * 를 임의의 다른 문자열로 변경해서 해야함
