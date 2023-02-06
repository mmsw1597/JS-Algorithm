function isPrime(n){
    for(let i = 2; i<=Math.floor(n/2); i++){
        if(n%i === 0) return true;
    }
    
    return false;
}

function solution(n) {
    let answer = 0;
    
    for(let i = 4; i<=n; i++){
        if(isPrime(i)) answer++;
    }
    
    return answer;
}