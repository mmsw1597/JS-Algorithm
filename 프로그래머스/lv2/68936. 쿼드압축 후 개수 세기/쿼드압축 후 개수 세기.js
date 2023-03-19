function solution(arr) {
    let answer = [0,0];
    
    function DFS(y, x, size){
        const start = arr[y][x];
        if(size === 1){
            answer[+start]++;
            return;
        }
        let flag = false;
        for(let i = y; i<y + size; i++){
            for(let j = x; j<x + size; j++){
                if(start !== arr[i][j]){
                    flag = true;
                    break;
                }
            }
            if(flag) break;
        }
        const half = size/2;
        if(flag){
            DFS(y,x, half);
            DFS(y, x+half, half);
            DFS(y+half, x, half);
            DFS(y+half, x+half, half);
        }else{
            answer[+start]++;
            return;
        }
    }
    
    DFS(0, 0, arr.length);
    return answer;
}