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
        // 이부분 중요! 목적지에 다다르면 체크할 필요없이 구슬은 움직일 수 없음
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

// BFS + 구현 문제. 푸는데 2시간 정도 걸렸다.

// 몇가지 에러사항을 먼저 적어보자면..
// 입력으로 주어지는 맵은 문자열이다. 따라서 input[i][j] = "." 을 해도 바뀌지 않는다.
// 따라서 배열로 변환하는 과정이 필요하다.

// 구슬이 특정 장소에 갈 수 있는지 체크 -> 갈 수 있으면 이동 하는 순서로 코드를 진행해야 하는데
// 만약 목적지에 다다르면 이동을 중단해야한다.
// 여기서 내가 헷갈린건 체크하는 곳이 목적지인 경우, 아직 구슬이 목적지가 아닌 상태에서 목적지로 갈 수 있냐를 묻는 것인데
// 이미 목적지에 도착한 걸로 착각하고 이동을 중단해버려서 답이 안나왔다.

// 빨강구슬과 파랑구슬은 동시에 한 곳에 공존할 수 없다는 조건을 중간부터 까먹었다는 점.
// 이런 조건을 까먹어버리면 그동안 작성 했던 코드 대부분을 수정해야되서 시간을 많이 잡아먹는다.

// 마지막으로 한번의 이동으로 빨강구슬이 목적지에 도착해도 파랑 구슬이 목적지에 오면 실패로 간주하는 것을 또 까먹었다.
// 여기서 굉장히 시간을 많이 썼는데, 빨강구슬이 목적지에 도착했다면 파랑구슬은 목적지 한에서는 빨강구슬과 겹쳐도 된다는 거를 알아야 한다.

// 결국 수많은 조건을 까먹어버린게 크다. 아무래도 기본 BFS만 짠다해도 정신없는데 조건까지 생각하려니 머리가 복잡해진것같다.
