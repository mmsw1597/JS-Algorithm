function solution(numbers) {
    let answer = 0;
    let n = numbers.length;
    
    for(let i = 0; i<n-1; i++){
        for(let j = i+1; j<n; j++){
            answer = Math.max(numbers[i] * numbers[j], answer);
        }
    }
    
    return answer;
}