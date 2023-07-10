function solution(board) {
    let answer = 0;
    const N = board.length;
    const d = [[1, 1], [1, -1], [-1, 1], [-1, -1], [0, 1], [0, -1], [1, 0], [-1, 0]];
    
    for(let y = 0; y < N; y++){
        for(let x = 0; x < N; x++){
            if(board[y][x] === 1){
                for(let [dy, dx] of d){
                    let ny = y + dy;
                    let nx = x + dx;
                    if(ny >= 0 && ny < N && nx >= 0 && nx < N && !board[ny][nx]){
                        board[ny][nx] = 2;
                    }
                }
            }
        }
    }
    
   for(let y = 0; y < N; y++){
        for(let x = 0; x < N; x++){
            if(!board[y][x]){
                answer++;
            }
        }
   }
    
    return answer;
}