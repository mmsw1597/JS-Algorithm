function solution(numbers) {
    let answer = Number.MIN_SAFE_INTEGER;
    
    for(let i=0; i<numbers.length-1; i++){
        for(let j=i+1; j<numbers.length; j++){
            answer = Math.max(numbers[i]*numbers[j], answer);
        }
    }
    
    
    return answer;
}