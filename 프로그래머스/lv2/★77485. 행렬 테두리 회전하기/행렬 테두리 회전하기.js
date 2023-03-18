function solution(rows, columns, queries) {
  let answer = [];
  let cnt = 1;
  const arr = Array.from(Array(rows), () => Array(columns).fill(0));

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      arr[i][j] = cnt++;
    }
  }

  function rotate(x1, y1, x2, y2) {
    const queue = [];

    for (let i = y1 - 1; i < y2 - 1; i++) {
      queue.push(arr[x1 - 1][i]);
    }

    for (let i = x1 - 1; i < x2 - 1; i++) {
      queue.push(arr[i][y2 - 1]);
    }

    for (let i = y2 - 1; i > y1 - 1; i--) {
      queue.push(arr[x2 - 1][i]);
    }

    for (let i = x2 - 1; i > x1 - 1; i--) {
      queue.push(arr[i][y1 - 1]);
    }
    const ret = Math.min(...queue);
    queue.unshift(queue.pop());
    let idx = 0;
    for (let i = y1 - 1; i < y2 - 1; i++) {
      arr[x1 - 1][i] = queue[idx++];
    }

    for (let i = x1 - 1; i < x2 - 1; i++) {
      arr[i][y2 - 1] = queue[idx++];
    }

    for (let i = y2 - 1; i > y1 - 1; i--) {
      arr[x2 - 1][i] = queue[idx++];
    }

    for (let i = x2 - 1; i > x1 - 1; i--) {
      arr[i][y1 - 1] = queue[idx++];
    }

    return ret;
  }

  for (let q of queries) {
    const [x1, y1, x2, y2] = q;
    answer.push(rotate(x1, y1, x2, y2));
  }

  return answer;
}

// 4번의 반복만으로도 풀 수 있다.
// 돌면서 배열에 담을 필요가 없음.
// 꼭짓점에 주의
