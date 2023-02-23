function solution(left, right) {
    let answer = 0;
    
    for(let n = left; n<=right; n++){
        let s = Math.floor(Math.sqrt(n));        
        if(s * s === n) answer -= n;
        else answer += n;
    }
    
    return answer;
}