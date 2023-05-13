const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map((v) => +v));

const [n] = input.shift();
let answer = -1;
const d = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

const move = (copy, y, x, dy, dx, fixed) => {
  let ny = y + dy;
  let nx = x + dx;

  while (ny >= 0 && ny < n && nx >= 0 && nx < n) {
    if (copy[ny][nx] === 0) {
      copy[ny][nx] = copy[ny - dy][nx - dx];
      copy[ny - dy][nx - dx] = 0;
      ny += dy;
      nx += dx;
    } else {
      move(copy, ny, nx, dy, dx, fixed);
      while (ny >= 0 && ny < n && nx >= 0 && nx < n && copy[ny][nx] === 0) {
        copy[ny][nx] = copy[ny - dy][nx - dx];
        copy[ny - dy][nx - dx] = 0;
        ny += dy;
        nx += dx;
      }
      if (
        ny >= 0 &&
        ny < n &&
        nx >= 0 &&
        nx < n &&
        !fixed["" + ny + nx] &&
        copy[ny][nx] === copy[ny - dy][nx - dx]
      ) {
        fixed["" + ny + nx] = true;
        copy[ny][nx] *= 2;
        copy[ny - dy][nx - dx] = 0;
      }
      return;
    }
  }

  return;
};

const DFS = (map, level) => {
  if (level >= 5) {
    for (let i = 0; i < n; i += 1) {
      //console.log(map[i]);
      for (let j = 0; j < n; j += 1) {
        answer = Math.max(map[i][j], answer);
      }
    }
    //console.log("--------");
    return;
  }

  const copy = Array(n)
    .fill()
    .map(() => Array(n).fill(0));

  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n; j += 1) {
      copy[i][j] = map[i][j];
    }
  }

  for (let i = 0; i < d.length; i += 1) {
    const [dy, dx] = d[i];
    //moving
    //right
    if (i === 0) {
      for (let i = 0; i < n; i += 1) {
        const fcopy = {};
        move(copy, i, 0, dy, dx, fcopy);
      }
    }
    //left
    else if (i === 1) {
      for (let i = 0; i < n; i += 1) {
        const fcopy = {};
        move(copy, i, n - 1, dy, dx, fcopy);
      }
    }
    //down
    else if (i === 2) {
      for (let i = 0; i < n; i += 1) {
        const fcopy = {};
        move(copy, 0, i, dy, dx, fcopy);
      }
    }
    //up
    else {
      for (let i = 0; i < n; i += 1) {
        const fcopy = {};
        move(copy, n - 1, i, dy, dx, fcopy);
      }
    }
    DFS(copy, level + 1);
    //back up
    for (let i = 0; i < n; i += 1) {
      for (let j = 0; j < n; j += 1) {
        copy[i][j] = map[i][j];
      }
    }
  }
};

DFS(input, 0);
console.log(answer);

// 푸는데 3시간.. 정도 걸렸다.
// DFS를 이용한 구현문제
// 풀면서 이정도로 메모리를 써도 되나.. 싶은 생각이 많이 들었는데 메모리 제한은 넉넉하고 입력 크기가 작으므로 팍팍 써도 된다.
// 실행시간은 푼 사람중에서 하위권. 다시 풀땐 다른 사람 코드 참고해서 푸는 시간과 실행시간을 단축시켜보자.

// 최대 5번까지만 이동할 수 있는데 DFS에 level > 5 를 종료 조건으로 걸었더니 6번째까지 이동했는 모양. 실수에 주의하자.
// 한번의 이동에서 합쳐진 블럭은 다시 합쳐질 수 없다라는 조건이 애를 먹였다.
// 하드코딩을 최대한 피하려고는 했는데 다른 코드를 보니 대부분 스위치문으로 푼 것을 보아 의도한대로 푼건 맞긴한듯?
// 제목에 easy는 뭘 의미하는지 모르겠다. 내가 붙인거 아니다.
