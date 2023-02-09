function solution(n, k) {
    let answer = 0;
    answer += 12000 * n;
    k -= Math.floor(n/10);
    answer += 2000 * k;
    
    return answer;
}