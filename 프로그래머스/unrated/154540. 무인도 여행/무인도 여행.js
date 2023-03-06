function solution(maps) {
    let answer = [];
    const n = maps.length;
    const m = maps[0].length;
    const d = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    const visited = Array.from(Array(n), () => Array(m).fill(false));
    
    function DFS(y, x){
        let sum = +maps[y][x];
        visited[y][x] = true;
        
        for(let [dy, dx] of d){
            const ny = dy + y;
            const nx = dx + x;
            if(ny >= 0 && ny < n && nx >= 0 && nx < m){
                if(!visited[ny][nx] && maps[ny][nx] !== "X")
                   sum += DFS(ny, nx);
            }
        }
        
        return sum;
    }
    
    for(let i = 0; i<n; i++){
        for(let j = 0; j<m; j++){
            if(maps[i][j] !== "X" && !visited[i][j]){
                answer.push(DFS(i, j));
            }
        }
    }
    
    if(answer.length === 0) return [-1];
    answer.sort((a, b) => a-b);
    
    return answer;
}