function solution(numbers) {
    const result = new Set();
    
    function DFS(cnt, index, sum){
        if(cnt >= 2){
            result.add(sum);
            return;
        }
        
        for(let i = index; i<numbers.length; i++){
            DFS(cnt + 1, i + 1, sum + numbers[i]);
        }
    }
    
    DFS(0, 0, 0);
    return [...result].sort((a, b) => a - b);
}