function solution(keyinput, board) {
    const answer = [0, 0];
    const direction = {
        up : [0, 1],
        down : [0, -1],
        left : [-1, 0],
        right : [1, 0],
    };
    const [maxWidth, maxHeight] = board.map(v => Math.floor(v / 2));
    let [x, y] = [0, 0];
    
    for(let key of keyinput){
        const [dx, dy] = direction[key];
        const [nx, ny] = [x + dx, y + dy];
        if(nx <= maxWidth && nx >= -maxWidth && ny <= maxHeight && ny >= -maxHeight){
            [x, y] = [nx, ny];
        }
    }

    return [x, y];
}