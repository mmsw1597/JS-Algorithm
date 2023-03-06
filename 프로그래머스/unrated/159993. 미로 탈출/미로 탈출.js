function solution(maps) {
    let answer = 0;
    const d = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    const n = maps.length;
    const m = maps[0].length;
    const queue = [];
    let start = [];
    let lever = [];
    let end = [];
    
    function BFS(sy, sx, target){
        const queue = [];
        let count = 0;
        const dis = Array.from(Array(maps.length), () => Array(maps[0].length).fill(false));
        dis[sy][sx] = 1;
        queue.push([sy, sx]);
        while(queue.length){
            const levelSize = queue.length;
            for(let i = 0; i<levelSize; i++){
                const [y,x] = queue.shift();
                if(maps[y][x] === target)
                    return count;
                for(let [dy, dx] of d){
                    const ny = dy + y;
                    const nx = dx + x;                  
                    if(ny >= 0 && ny < n && nx >= 0 && nx < m){
                        if(!dis[ny][nx] && maps[ny][nx] !== "X"){
                            dis[ny][nx] = true;
                            queue.push([ny, nx]);
                        }
                    }
                }
            }
            count++;
        }
        return -1;
    }
    
    for(let i = 0; i<maps.length; i++){
        for(let j= 0 ;j<maps[0].length; j++){
            if(maps[i][j] === "S")
                start = [i, j];
            else if(maps[i][j] === "E")
                end = [i, j];
            else if(maps[i][j] === "L")
                lever = [i,j];
        }   
    }
    const L = BFS(start[0], start[1], "L");
    if(L === -1) return -1;   
    const E = BFS(lever[0], lever[1], "E");
    if(E === -1) return -1
    return L+E;
}