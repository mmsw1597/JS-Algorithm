function solution(maps) {
  let answer = 0;
  const d = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  const n = maps.length;
  const m = maps[0].length;
  const queue = [];
  let start = [];
  let lever = [];
  let end = [];

  function BFS(sy, sx, target) {
    const queue = [];
    let count = 0; //0으로 초기화해야함
    const dis = Array.from(Array(maps.length), () =>
      Array(maps[0].length).fill(false)
    );
    dis[sy][sx] = 1; //중요 : 시작 포인트를 먼저 visit로 처리해야함
    queue.push([sy, sx]); //시작 포인트 큐에 삽입
    while (queue.length) {
      //반복문 기억
      const levelSize = queue.length;
      for (let i = 0; i < levelSize; i++) {
        const [y, x] = queue.shift(); //shift로 첫번째 원소 추출
        if (maps[y][x] === target) return count;
        for (let [dy, dx] of d) {
          const ny = dy + y;
          const nx = dx + x;
          if (ny >= 0 && ny < n && nx >= 0 && nx < m) {
            if (!dis[ny][nx] && maps[ny][nx] !== "X") {
              dis[ny][nx] = true;
              queue.push([ny, nx]);
            }
          }
        }
      }
      count++;
    }
    return -1;
  }

  for (let i = 0; i < maps.length; i++) {
    for (let j = 0; j < maps[0].length; j++) {
      if (maps[i][j] === "S") start = [i, j];
      else if (maps[i][j] === "E") end = [i, j];
      else if (maps[i][j] === "L") lever = [i, j];
    }
  }
  const L = BFS(start[0], start[1], "L");
  if (L === -1) return -1;
  const E = BFS(lever[0], lever[1], "E");
  if (E === -1) return -1;
  return L + E;
}

//일단 두 번의 BFS 탐색이 필요하니까 BFS 함수를 따로 만들고 그 함수 내에서 방문 배열을 초기화 해야함
//BFS 구현 방법을 잘 몰랐는데 이참에 이해하고 가자.
//초기 큐에 있던 노드들이 0레벨
//첫 싸이클에는 큐에 노드를 삽입하기 전에 있던 노드만 고려해야함. 큐에 삽입한 거까지 반복문이 돌지 않도록 주의
//출발지에서 목적지까지 거리는 곧 노드의 레벨을 의미.
//BFS문제로 매우 좋은 문제 반드시 다시 풀자
