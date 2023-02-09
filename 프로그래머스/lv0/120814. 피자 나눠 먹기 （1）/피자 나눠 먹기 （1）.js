function solution(n) {
    let answer = 1;
    
    while((answer * 7) < n) answer++;
    
    return answer;
}