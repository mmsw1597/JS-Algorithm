function solution(slice, n) {
    let answer = 1;
    
    while(!Math.floor((slice*answer)/n)) answer++;
    
    return answer;
}