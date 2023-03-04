function solution(x, n) {
    const answer = [];
    let tmp = x;
    for(let i = 0 ; i<n; i++){
        answer.push(tmp);
        tmp += x;
    }
    
    return answer;
}