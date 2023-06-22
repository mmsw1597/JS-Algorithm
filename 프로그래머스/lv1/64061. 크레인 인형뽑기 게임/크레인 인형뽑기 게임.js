function solution(board, moves) {
    let answer = 0;
    let stack = [];
    
    for(let m of moves){
        m -= 1;
        for(let i = 0; i<board.length; i++){
            if(board[i][m]){
                if(stack[stack.length - 1] === board[i][m]){
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