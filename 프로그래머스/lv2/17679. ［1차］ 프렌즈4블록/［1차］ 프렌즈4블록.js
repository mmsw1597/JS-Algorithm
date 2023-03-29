function solution(m, n, board) {
    let answer = 0;
    const visit = Array.from(Array(m), () => Array(n).fill(false));
    const d = [[0, 1], [1, 0], [1, 1]];
    let repeat = true;
    while(repeat){
        repeat = false;
        // 터지는 블록 마킹
        for(let i = 0; i<m-1; i++){
            for(let j = 0; j<n-1; j++){
                const target = board[i][j];
                if(target !== ""){
                    let flag = true;
                    for(let [dy, dx] of d){
                        const ny = i + dy;
                        const nx = j + dx;                 
                        if(board[ny][nx] !== target){
                            flag = false;
                            break;
                        }
                    }
                    if(flag){
                        repeat = true;
                        visit[i][j] = true;
                        for(let [dy, dx] of d){
                            const ny = i + dy;
                            const nx = j + dx;
                            visit[ny][nx] = true;
                        }
                    }
                }
            }
        }
        if(!repeat) break;
        
        let tmpBoard = Array.from(Array(m), ()=>Array(n).fill(""));
        // 블럭 내리기
        for(let x = 0; x<n; x++){
            let idx = m-1;
            for(let y = m-1; y>=0; y--){
                if(visit[y][x]) {
                    visit[y][x] = false;
                    answer++;
                }
                else tmpBoard[idx--][x] = board[y][x];
            }
        }
        board = tmpBoard;
    }
    
    return answer;
}