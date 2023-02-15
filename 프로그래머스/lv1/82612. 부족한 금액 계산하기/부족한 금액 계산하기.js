function solution(price, money, count) {
    let answer = 0;
    let N = 1;
    let sum = 0;
    
    while(count >= N){
        sum += price * N;
        N++;
    }
    
    if(sum > money) answer = sum - money;
    else answer = 0;

    return answer;
}