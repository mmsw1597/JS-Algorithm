function solution(name) {
  let answer = Number.MAX_SAFE_INTEGER;
  const sname = name.split("");
  let count = 0;

  for (let i = 0; i < name.length; i++) {
    if ("A" === name[i]) {
      count++;
    }
  }

  function change(mine, target) {
    let cur = mine.charCodeAt();
    let end = target.charCodeAt();
    let up = 0;
    let down = 0;

    //up
    if (end > cur) up = end - cur;
    else up = 200;
    //down
    while (cur !== end) {
      cur--;
      down++;
      if (cur < 65) cur = 90;
    }

    return Math.min(up, down);
  }

  function move(index, dir) {
    let curIndex = index;
    let cnt = 0;

    while (sname[curIndex] === "A") {
      curIndex += dir;
      cnt++;
      if (curIndex >= name.length) curIndex = 0;
      if (curIndex < 0) curIndex = name.length - 1;
    }

    return [cnt, curIndex];
  }

  function DFS(cur, cnt, ccc) {
    if (cnt === name.length) {
      answer = Math.min(answer, ccc);
      return;
    }

    //right
    let [cost, index] = move(cur, 1);
    let save = sname[index];

    cost += change("A", sname[index]);
    sname[index] = "A";
    DFS(index, cnt + 1, ccc + cost);
    sname[index] = save;

    //left
    [cost, index] = move(cur, -1);
    save = sname[index];

    cost += change("A", sname[index]);
    sname[index] = "A";
    DFS(index, cnt + 1, ccc + cost);
    sname[index] = save;
  }

  DFS(0, count, 0);
  return answer;
}

// 사이트 상에선 그리디라고 되어있어서 그리디로 풀려다가 망함
// 입력 사이즈가 작으므로 완전탐색도 가능한거 같았음
// 그리디로 갔다가 DFS로 바꾼거라 코드가 좀 엉망
