function solution(n) {
    const answer = Array(n).fill().map(() => Array(n).fill(0));  
    const d = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let direction = 0;
    let [y, x] = [0, 0];
    let cnt = 0;
    
    while(cnt < n * n){
        answer[y][x] = ++cnt;
        let [dy, dx] = d[direction % 4];
        let [ny, nx] = [y + dy, x + dx];
        if(ny >= n || ny < 0 || nx >= n || nx < 0 || answer[ny][nx]){
            direction += 1;
            [dy, dx] = d[direction % 4];
            [ny, nx] = [y + dy, x + dx];
        }
        [y, x] = [ny, nx];
    }
    
    return answer;
}