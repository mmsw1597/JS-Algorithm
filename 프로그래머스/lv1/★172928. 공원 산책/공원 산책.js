function solution(park, routes) {
  let answer = [];
  let startY = 0;
  let startX = 0;
  const H = park.length;
  const W = park[0].length;
  const direction = {
    N: [-1, 0],
    E: [0, 1],
    S: [1, 0],
    W: [0, -1],
  };

  for (let i = 0; i < park.length; i += 1) {
    for (let j = 0; j < park[i].length; j += 1) {
      if (park[i][j] === "S") {
        startY = i;
        startX = j;
        break;
      }
    }
  }

  for (let piece of routes) {
    let [dir, dis] = piece.split(" ");
    let [dy, dx] = direction[dir];
    let flag = false;
    let ny = null;
    let nx = null;

    for (let i = 1; i <= dis; i += 1) {
      ny = startY + dy * i;
      nx = startX + dx * i;
      if (ny >= H || ny < 0 || nx >= W || nx < 0 || park[ny][nx] === "X") {
        flag = true;
        break;
      }
    }
    if (flag) continue;
    startY = ny;
    startX = nx;
  }

  return [startY, startX];
}

// 간단한 구현 문제
// 만나는 도중에 장애물을 만나는 것을 고려해야함
