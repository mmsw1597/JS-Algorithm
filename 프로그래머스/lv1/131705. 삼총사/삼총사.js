function solution(number) {
    let answer = 0;
    let sum = 0;
    let cnt = 0;
    
    function DFS(idx){
        if(cnt === 3){
            if(sum === 0)
                answer++;
            return;
        }
        
        for(let i = idx; i<number.length; i++){
            sum += number[i];
            cnt++;
            DFS(i+1);
            sum -= number[i];
            cnt--;
        }
        
        return;
    }
    
    DFS(0);
    
    return answer;
}