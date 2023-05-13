// 파랑 구슬이 구멍에 들어가면 실패, 빨강과 동시에 들어가도 실패
// 10번 이하로 빨강 구슬을 구멍에 들어가게 해야 성공
// 그렇지 않으면 실패

class Node {
  constructor(y, x) {
    this.y = y;
    this.x = x;
  }
}

const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input
  .shift()
  .split(" ")
  .map((v) => +v);

input = input.map((V) => V.split(""));

const d = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];
let redY = 0;
let redX = 0;
let blueY = 0;
let blueX = 0;

for (let i = 0; i < n; i += 1) {
  for (let j = 0; j < m; j += 1) {
    if (input[i][j] === "B") {
      input[i][j] = ".";
      blueY = i;
      blueX = j;
    } else if (input[i][j] === "R") {
      input[i][j] = ".";
      redY = i;
      redX = j;
    }
  }
}

const visit = {};

let queue = [[new Node(redY, redX), new Node(blueY, blueX)]];
visit["" + redY + redX + blueY + blueX] = true;
let level = 1;

const check = (y, x, ty, tx) => {
  if (input[ty][tx] !== "O" && y === ty && x === tx) return false;
  if (input[y][x] !== "#") return true;
  else return false;
};

while (queue.length && level <= 10) {
  let tmp = queue;
  queue = [];

  for (let [r, b] of tmp) {
    const { y: ry, x: rx } = r;
    const { y: by, x: bx } = b;

    for (let [dy, dx] of d) {
      let nby = by;
      let nbx = bx;
      let nry = ry;
      let nrx = rx;

      let rg = false;
      let bg = false;
      do {
        rf = !rg && check(nry + dy, nrx + dx, nby, nbx);
        bf = !bg && check(nby + dy, nbx + dx, nry, nrx);

        if (rf) {
          nry += dy;
          nrx += dx;
        }
        if (bf) {
          nby += dy;
          nbx += dx;
        }

        if (input[nry][nrx] === "O") rg = true;
        if (input[nby][nbx] === "O") bg = true;
      } while (rf || bf);

      if (bg) {
        continue;
      } else if (rg) {
        console.log(level);
        return;
      } else if (!visit["" + nry + nrx + nby + nbx]) {
        visit["" + nry + nrx + nby + nbx] = true;
        queue.push([new Node(nry, nrx), new Node(nby, nbx)]);
      }
    }
  }

  level += 1;
}

console.log(-1);
