function solution(line) {
  let answer = [];
  const coord = [];
  const tmp = [];
  const set = new Set();

  function cal() {
    const [A, B, E] = tmp[0];
    const [C, D, F] = tmp[1];

    if (A * D - B * C === 0) return;

    const x = (B * F - E * D) / (A * D - B * C);
    const y = (E * C - A * F) / (A * D - B * C);
    const tx = x;
    const ty = y;

    if (x === Math.floor(tx) && y === Math.floor(ty)) {
      coord.push([x, y]);
      return;
    }
  }

  function DFS(idx, num) {
    if (num === 2) {
      cal();
      return;
    }

    for (let i = idx; i < line.length; i++) {
      tmp.push(line[i]);
      DFS(i + 1, num + 1);
      tmp.pop();
    }
  }

  DFS(0, 0);
  const max = [Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER];
  const min = [Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER];

  for (let [x, y] of coord) {
    const [mx, my] = max;
    const [nx, ny] = min;

    if (mx < x) max[0] = x;
    if (my < y) max[1] = y;
    if (nx > x) min[0] = x;
    if (ny > y) min[1] = y;
  }

  const row = max[0] - min[0] + 1;
  const col = max[1] - min[1] + 1;
  const board = Array.from(Array(col), () => Array(row).fill("."));

  for (let [x, y] of coord) {
    board[max[1] - y][x - min[0]] = "*";
  }

  return board.map((v) => v.join(""));
}

// 구현문제
// 코드 상의 배열과 실제 좌표평면 사이의 매핑이 중요
