function solution(grid) {
    let answer = [];
    const n = grid.length;
    const m = grid[0].length;
    let mem = new Array(n).fill().map((_) => new Array(m).fill().map((_) => new Array(4).fill(0)));
    const d = [[1, 0], [0, -1], [-1, 0], [0, 1]];
    const dir = {
        0 : "down",
        1 : "right",
        2 : "left",
        3 : "up",
    };
    const leftD = {
        0 : 1,
        1 : 3,
        2 : 0,
        3 : 2
    }
    const rightD = {
        0 : 2,
        1 : 0,
        2 : 3,
        3 : 1
    }
    
    function nextDir(e, d){
        if(e === "S") return d;
        else if(e === "L") return d - 1 < 0 ? 3 : d - 1;   
        else if(e === "R") return d + 1 > 3 ? 0 : d + 1;
    }
    function startTour(y, x, direction, start, cnt){
        if(mem[y][x][direction]) {
            if(start[0] === y && start[1] === x && start[2] === direction)
                answer.push(cnt);
            return;
        }
        mem[y][x][direction] = true;
        
        const e = grid[y][x];
        const nextD = +nextDir(e, direction);   
        
        let ny = y + d[nextD][0];
        let nx = x + d[nextD][1];
    
        if(ny < 0) ny = n-1;
        else if(ny >= n) ny = 0;
        if(nx < 0) nx = m-1;
        else if(nx >= m) nx = 0;
        
        startTour(+ny, +nx, +nextD, start, cnt+1);
        return;
    }
    
    for(let i = 0; i<n; i++){
        for(let j = 0; j<m; j++){
            for(let k = 0; k<4; k++){
                if(mem[i][j][k]) continue;
                let y = i;
                let x = j;
                let dir = k;
                let cnt = 0;
                while(!mem[y][x][dir]){
                    mem[y][x][dir]=true;
                    const e = grid[y][x];
                    const nextD = nextDir(e, dir);
                    
                    let ny = y + d[nextD][0];
                    let nx = x + d[nextD][1];
                    
                    if(ny < 0) ny = n-1;
                    else if(ny >= n) ny = 0;
                    if(nx < 0) nx = m-1;
                    else if(nx >= m) nx = 0;
                    
                    y = ny;
                    x = nx;
                    dir = nextD;
                    cnt++;
                }
                answer.push(cnt);
            }
        }
    }
    
    return answer.sort((a,b) => a-b);
}