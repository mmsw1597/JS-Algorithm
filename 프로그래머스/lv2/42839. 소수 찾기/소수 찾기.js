function solution(numbers) {
    let answer = 0;
    const memory = {};
    const visit = Array.from({length: numbers.length}, () => false);
    
    function isPrime(n){
        if(n <= 1) return false;
        
        for(let i = 2; i<=Math.sqrt(n); i++){
            if(n % i === 0) return false;
        }
        
        return true;
    }
    
    function DFS(N, cur){
        if(cur.length && !memory[+cur]){
            memory[+cur] = true;
            if(isPrime(+cur)) {
                answer++;
            }
        }
        
        if(N === numbers.length){
            if(!memory[+cur] && isPrime(+cur)) {
                memory[+cur] = true;
                answer++;
            }
            return;
        }
        
        for(let i = 0; i<numbers.length; i++){
            if(!visit[i]){
                visit[i] = true;
                DFS(N+1, cur+numbers[i]);
                visit[i] = false;
            }
        }
    }
    DFS(0, "");
    
    return answer;
}