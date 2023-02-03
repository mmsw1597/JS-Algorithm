function solution(n) {
    let answer = 2;
    
    for(let i = 2; i <= Math.floor(n / 2); i++){
        if(n / i === i) answer = 1;
    }
    
    return answer;
}