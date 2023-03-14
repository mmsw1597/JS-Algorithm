function solution(n, left, right) {
    let answer = [];
    
    for(let i = left; i<=right; i++){
        const x = Math.floor(i / n);
        const y = i % n;
        
        if(y <= x)
            answer.push(x + 1);
        else
            answer.push(y + 1);
    }

    return answer;
}