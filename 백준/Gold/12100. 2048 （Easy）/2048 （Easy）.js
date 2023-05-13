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