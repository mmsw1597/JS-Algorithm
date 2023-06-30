function solution(numbers) {
    let answer = 0;
    const memory = {};
    const visit = Array.from({length : numbers.length}, () => false);
    
    function isPrime(n){
        if(n <= 1) return false;
        
        for(let i = 2; i <=Math.sqrt(n); i++){
            if(n % i === 0) return false;
        }
        
        return true;
    }
    
    function DFS(N, temp){
        if(temp.length && !memory[+temp] && isPrime(+temp)){
            memory[+temp] = true;
        }
        
        if(N >= numbers.length){
            return;
        }
        
        for(let i = 0; i<numbers.length; i++){
            if(!visit[i]){
                visit[i] = true;
                DFS(N, temp + numbers[i]);
                visit[i] = false;
            }
        }
    }
    
    DFS(0, "");
    
    return Object.keys(memory).length;
}