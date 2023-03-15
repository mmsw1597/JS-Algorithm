function solution(n, info) {
    let answer = [-1];
    let scoreA = 0;
    let scoreB = 0;
    let max = -1;
    let tmp = Array.from({length : 11}, () => 0);
    
    for(let i = 0; i<11; i++){
        if(info[i]) scoreA += (10 - i);
    }
    
    function DFS(arrow, idx, A, L){
        if(arrow === 0 || idx < 0){
            if(A < L && max < Math.abs(A - L)){
                max = Math.abs(A-L);
                answer = tmp.slice();
                if(arrow > 0)
                    answer[10] = arrow;
            }
            return;
        }
        
        for(let i = idx; i>=0; i--){
            if(arrow >= info[i] + 1){
                tmp[i] = info[i] + 1;
                if(info[i]) DFS(arrow - (info[i] + 1), i-1, A - (10-i), L + (10-i));
                else DFS(arrow - (info[i] + 1), i-1, A, L + (10-i));
                tmp[i] = 0;
            }
            DFS(arrow, i-1, A, L);
        }
    }
    
    DFS(n, 9, scoreA, 0);
    return answer;
}