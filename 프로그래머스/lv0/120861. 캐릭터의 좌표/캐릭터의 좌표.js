function solution(keyinput, board) {
    let answer = [0, 0];
    let max_col = Math.floor(board[0]/2);
    let max_row = Math.floor(board[1]/2);
    
    for(let move of keyinput){
        switch(move){
            case "left":
                answer[0] = (answer[0] === max_col * (-1)) ? max_col * (-1) : answer[0] - 1;
                break;
            case "right":
                answer[0] = answer[0] === max_col ? max_col : answer[0] + 1;
                break;
            case "up":
                answer[1] = answer[1] === max_row ? max_row : answer[1] + 1;
                break;
            case "down":
                answer[1] = answer[1] === max_row * (-1) ? max_row * (-1) : answer[1] - 1;
                break;
        }
    }
    
    return answer;
}