function solution(n) {
    let answer = 0;
    const d = [[1, 1], [1, -1]];
    const visit = Array.from(Array(n), ()=>Array(n).fill(0));
    const map = {};
    
    function DFS(y){
        if(y === n){
            answer++;
            return;
        }
        
        for(let i = 0; i<n; i++){
            if(!visit[y][i] && !map[i]){
                for(let [dy, dx] of d){
                    let ny = y + dy;
                    let nx = i + dx;
                    while(ny >= 0 && ny < n && nx>= 0 && nx < n){
                        visit[ny][nx]++;
                        ny += dy;
                        nx += dx;
                    }
                }
                map[i] = true;
                DFS(y + 1);
                for(let [dy, dx] of d){
                    let ny = y + dy;
                    let nx = i + dx;
                    while(ny >= 0 && ny < n && nx>= 0 && nx < n){
                        visit[ny][nx]--;
                        ny += dy;
                        nx += dx;
                    }
                }
                delete map[i];
            }
        }
    }
    
    DFS(0);

    return answer;
}