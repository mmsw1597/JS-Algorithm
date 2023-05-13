const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const n = Number(input[0]);
const appleNum = Number(input[1]);
const apples = input.slice(2, 2 + appleNum);
const dirNum = Number(input[2 + appleNum]);
const dirs = input.slice(3 + appleNum);

const map = Array(n)
  .fill()
  .map(() => Array(n).fill("."));

const dir = {
  U: [-1, 0],
  D: [1, 0],
  R: [0, 1],
  L: [0, -1],
};

const changeDir = (cur, com) => {
  if (cur === "R") {
    if (com === "L") return "U";
    else return "D";
  }
  if (cur === "L") {
    if (com === "L") return "D";
    else return "U";
  }
  if (cur === "U") {
    if (com === "L") return "L";
    else return "R";
  }
  if (cur === "D") {
    if (com === "L") return "R";
    else return "L";
  }
};

let snake = [[0, 0]];
map[0][0] = "S";
let d = dir.R;
for (let str of apples) {
  let [y, x] = str.split(" ").map((v) => +v);
  map[y - 1][x - 1] = "A";
}
let list = dirs.map((v) => v.split(" "));
let [nextT, nextC] = list[0];
let idx = 1;
let curD = "R";
let answer = 0;

while (1) {
  if (idx <= list.length && answer === +nextT) {
    const c = changeDir(curD, nextC);
    curD = c;
    d = dir[c];
    if (idx < list.length) [nextT, nextC] = list[idx++];
  }
  answer += 1;
  let [headY, headX] = snake[0];
  let [dy, dx] = d;
  let ny = headY + dy;
  let nx = headX + dx;

  if (ny >= n || ny < 0 || nx >= n || nx < 0) break;
  if (map[ny][nx] === "A") {
    map[ny][nx] = "S";
    snake.unshift([ny, nx]);
    continue;
  }
  if (map[ny][nx] === "S") break;
  else {
    map[ny][nx] = "S";
    snake.unshift([ny, nx]);
  }

  let [ty, tx] = snake.pop();
  map[ty][tx] = ".";
}

console.log(answer);
