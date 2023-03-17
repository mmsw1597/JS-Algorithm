function solution(board) {
  let answer = 0;
  let start = [];
  const d = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  const n = board.length;
  const m = board[0].length;
  const visit = Array.from(Array(n), () => Array(m).fill(false));
  let flag = false;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === "R") {
        start = [i, j];
        flag = true;
        break;
      }
    }
    if (flag) break;
  }

  let queue = [start];
  visit[start[0]][start[1]] = true;
  let cnt = 0;

  while (queue.length) {
    const tmp = queue;
    queue = [];
    for (let [y, x] of tmp) {
      if (board[y][x] === "G") return cnt;
      for (let [dy, dx] of d) {
        let ny = y + dy;
        let nx = x + dx;
        let ty = y;
        let tx = x;

        while (
          ny >= 0 &&
          ny < n &&
          nx >= 0 &&
          nx < m &&
          board[ny][nx] !== "D"
        ) {
          ty = ny;
          tx = nx;
          ny += dy;
          nx += dx;
        }
        if (!visit[ty][tx]) {
          visit[ty][tx] = true;
          queue.push([ty, tx]);
        }
      }
    }
    cnt++;
  }

  return -1;
}

// BFS
// 처음에 ty, tx를 null로 잡고 if문안에 ty && tx를 조건으로 걸었는데 이때 ty, tx가 0이면 유효한데도 조건에 안걸림
