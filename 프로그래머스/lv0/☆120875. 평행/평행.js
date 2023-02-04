function solution(dots) {
  let answer = 0;
  let ch = Array.from({ length: 4 }, () => 0);
  let g = [];
  let tmp = [];
  let res = [];

  function DFS(cnt, idx) {
    if (cnt === 2) {
      g.push(tmp.slice());
      return;
    }

    for (let i = idx; i < 4; i++) {
      if (!ch[i]) {
        ch[i] = 1;
        tmp.push([dots[i][0], dots[i][1]]);
        DFS(cnt + 1, i + 1);
        tmp.pop();
        ch[i] = 0;
      }
    }
  }

  DFS(0, 0);

  for (let [[x1, y1], [x2, y2]] of g) {
    res.push((x1 - x2) / (y1 - y2));
  }

  for (let i = 0; i < res.length; i++) {
    if (res.indexOf(res[i], i + 1) !== -1) {
      answer = 1;
      break;
    }
  }

  return answer;
}

//조합 구하기
