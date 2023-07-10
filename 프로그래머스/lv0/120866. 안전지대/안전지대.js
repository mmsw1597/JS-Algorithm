function solution(board) {
    let answer = 0;
    let d = [[-1, 0], [1, 0], [0, -1], [0, 1], [1,1], [1,-1], [-1,1], [-1,-1]];
    let n = board.length;
    
    for(let i = 0; i<n; i++){
        for(let j = 0; j<n; j++){
            if(board[i][j] === 1){
                for(let [dy, dx] of d){
                    let ny = i + dy;
                    let nx = j + dx;

                    if(nx >= 0 && nx < n && ny >= 0 && ny < n && board[ny][nx] === 0){
                        board[ny][nx] = 2;
                    }
                }
            }
        }
    }
    
    for(let i = 0; i<n; i++){
        for(let j = 0; j<n; j++){
            if(!board[i][j]) answer++;
        }
    }
    
    return answer;
}