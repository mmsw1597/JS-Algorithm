function solution(maps) {
    let answer = 0;
    let queue = [];
    let level = 0 + 1;
    const n = maps.length;
    const m = maps[0].length;
    const visit = Array.from(Array(n), () => Array(m).fill(false));
    const d = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    queue.push([0, 0]);
    visit[0][0] = true;
    
    while(queue.length){
        let tmp = queue;
        queue = [];
        
        for(let [y, x] of tmp){
            if(y === n-1 && x === m-1) return level;
            for(let [dy, dx] of d){
                let ny = dy + y;
                let nx = dx + x;
                
                if(ny >= 0 && ny < n && nx >= 0 && nx < m && !visit[ny][nx] && maps[ny][nx]){
                    visit[ny][nx] = true;
                    queue.push([ny, nx]);
                }
            }
        }
        level++;
    }

    return -1;
}