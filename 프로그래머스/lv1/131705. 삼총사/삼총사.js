function solution(number) {
    let answer = 0;
    
    function DFS(cnt, index, sum){
        if(cnt >= 3){
            if(sum === 0) answer++;
            return;
        }
        for(let i = index; i<number.length; i++){
            DFS(cnt + 1, i + 1, sum + number[i]);
        }
    }
    
    DFS(0, 0, 0);
    
    return answer;
}