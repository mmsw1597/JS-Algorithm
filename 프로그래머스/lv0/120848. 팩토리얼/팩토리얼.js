function solution(n) {
    let answer = 0;
    let tmp = 1;
    for(let i = 1; i<=n; i++){
        tmp *= i;
        if(tmp <= n) answer = i;
        else break;
    }
    
    return answer;
}