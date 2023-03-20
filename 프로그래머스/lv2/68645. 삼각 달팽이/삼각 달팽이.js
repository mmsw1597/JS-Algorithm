function solution(n) {
    let answer = [];
    let tmp = Array.from(Array(n), () => Array(n).fill(0));
    const d = [[1, 0], [0, 1], [-1, -1]];
    let flag = true;
    let startY = 0;
    let startX = 0;
    let dir = 0;
    let cnt = 1;
    
    while(flag){
        dir %= 3;
        let ny = startY;
        let nx = startX;
        let fflag = false;
        
        while(ny < n && ny >= 0 && nx < n && nx >= 0 && !tmp[ny][nx]){
            fflag = true;
            tmp[ny][nx] = cnt++;
            ny += d[dir][0];
            nx += d[dir][1];
        }
        ny = ny - d[dir][0];
        nx = nx - d[dir][1];
        dir = (dir+1) % 3;
        startY = ny + d[dir][0];
        startX = nx + d[dir][1];
        if(!fflag) flag = false;
    }
    
    for(let i = 0; i<n; i++){
        for(let j =0; j<=i; j++){
            answer.push(tmp[i][j]);
        }
    }
    
    return answer;
}