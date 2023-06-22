// 인형이 없는 곳에 크레인이 내려오면 아무일도 일어나지 않는다.
// 바구니는 충분히 크다.
// 사라진 인형 개수 return

function solution(board, moves) {
    let answer = 0;
    const stack = [];
    const size = board.length;
    
    moves.forEach(x => {
        x -= 1;
        let y = 0; 
        while(y < size){
            if(board[y][x]){
                if(stack[stack.length - 1] === board[y][x]){
                    stack.pop();
                    answer += 2;
                }else{
                    stack.push(board[y][x]);
                }
                board[y][x] = 0;
                break;
            }
            y++;
        }
    })
    
    return answer;
}