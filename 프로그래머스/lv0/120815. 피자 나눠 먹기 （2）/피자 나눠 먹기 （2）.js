function solution(n) {
    let answer = 1;
    while((answer*6) % n){
        answer++;
    }
    
    return answer;
}