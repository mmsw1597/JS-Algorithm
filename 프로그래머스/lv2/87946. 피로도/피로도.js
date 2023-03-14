function solution(k, dungeons) {
    let answer = 0;
    const visit = Array.from({length: dungeons.length}, () => false);
    
    function DFS(exh){
        if(exh <= 0) return 0;
        let ret = 0;
        for(let i = 0; i<dungeons.length; i++){
            if(!visit[i] && exh >= dungeons[i][0]){
                visit[i] = true;
                ret = Math.max(DFS(exh - dungeons[i][1]) + 1, ret);
                visit[i] = false;
            }
        }
        
        return ret;
    }
    
    answer = DFS(k);
    return answer;
}