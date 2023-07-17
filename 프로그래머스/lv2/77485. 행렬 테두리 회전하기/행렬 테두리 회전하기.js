function solution(rows, columns, queries) {
    const answer = [];
    const d = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    const board = new Array(rows + 1).fill()
    .map((_, i) => new Array(columns + 1).fill().map((_, j) => (i-1) * (columns) + j));
    
    for(let [y1, x1, y2, x2] of queries){
        let minValue = Infinity;
        const dequeue = [];
        const s = [[y1, x1], [y1, x2], [y2, x2], [y2, x1]];
        let cnt = 0;
        for(let [dy, dx] of d){
            let [ny, nx] = s[cnt];
            let [ey, ex] = s[(cnt + 1) % 4];
            while(ny !== ey || nx !== ex){
                dequeue.push(board[ny][nx]);
                minValue = Math.min(minValue, board[ny][nx]);
                [ny, nx] = [ny + dy, nx + dx];
            }
            cnt++;
        }
        dequeue.unshift(dequeue.pop());
        cnt = 0;
        let idx = 0;
        for(let [dy, dx] of d){
            let [ny, nx] = s[cnt];
            let [ey, ex] = s[(cnt + 1) % 4];
            while(ny !== ey || nx !== ex){
                board[ny][nx] = dequeue[idx++];
                [ny, nx] = [ny + dy, nx + dx];
            }
            cnt++;
        }
        
        answer.push(minValue);
    }
    
    return answer;
}












