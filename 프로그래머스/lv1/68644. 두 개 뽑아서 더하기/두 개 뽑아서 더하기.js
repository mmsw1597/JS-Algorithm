function solution(numbers) {
    let answer = new Set();
    let tmp = [];
    
    function DFS(n, index){
        if(n === 2){
            answer.add(tmp[0] + tmp[1]);
            return;
        }
        
        for(let i = index; i<numbers.length; i++){
            tmp.push(numbers[i]);
            DFS(n+1, i+1);
            tmp.pop();
        }
    }
    
    DFS(0, 0);
    return [...answer].sort((a, b) => a-b);
}