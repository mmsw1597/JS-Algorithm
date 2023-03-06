function solution(board) {
  let answer = 1;
  const win = {
    O: 0,
    X: 0,
  };
  const count = {
    O: 0,
    X: 0,
  };

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] !== ".") {
        count[board[i][j]]++;
      }
    }
  }

  for (let i = 0; i < 3; i++) {
    if (board[i][0] !== ".") {
      if (board[i][0] === board[i][1] && board[i][0] === board[i][2]) {
        win[board[i][0]]++;
      }
    }
  }

  for (let i = 0; i < 3; i++) {
    if (board[0][i] !== ".") {
      if (board[0][i] === board[1][i] && board[0][i] === board[2][i]) {
        win[board[0][i]]++;
      }
    }
  }

  if (board[0][0] !== ".") {
    if (board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
      win[board[0][0]]++;
    }
  }

  if (board[0][2] !== ".") {
    if (board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
      win[board[0][2]]++;
    }
  }

  if (count.X > count.O) answer = 0;
  if (win.X && win.O) answer = 0;
  if (count.O - count.X >= 2) answer = 0;
  if (win.X && count.X !== count.O) answer = 0;
  if (win.O && count.O - count.X !== 1) answer = 0;
  return answer;
}

//대부분 다른 사람도 틱택토 가로, 세로, 대각선 개수는 완전탐색으로 풀었음
//처음 3가지 조건만 고려했는데 나머지 2가지 조건을 고려 못함
//X가 승리했을때는 반드시 X개수와 O개수가 같아야함
//O가 승리했을때는 반드시 X개수보다 1개 더 많아야함
