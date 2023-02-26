function solution(board, moves) {
  let answer = 0;
  let stack = [];

  for (let m of moves) {
    m -= 1;
    for (let i = 0; i < board.length; i++) {
      if (board[i][m]) {
        if (stack[stack.length - 1] === board[i][m]) {
          stack.pop();
          answer += 2;
          board[i][m] = 0;
          break;
        }
        stack.push(board[i][m]);
        board[i][m] = 0;
        break;
      }
    }
  }

  return answer;
}

//그냥 급하게 하느라 중복된 부분이 있긴 한데 방법은 board[i][m]을 미리 tmp에 저장하면 중복 제거 가능
