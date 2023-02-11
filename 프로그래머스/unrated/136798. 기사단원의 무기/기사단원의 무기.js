function solution(number, limit, power) {
    let answer = 0;
    
    for(let n = 1; n<=number; n++){
        let count = 0;
        
        for(let j = 1; j*j <= n; j++){
            if(j * j === n) count++;
            else if((n % j) === 0) count += 2; 
        }
        
        if(count > limit) answer += power;
        else answer += count;
    }
    return answer;
}