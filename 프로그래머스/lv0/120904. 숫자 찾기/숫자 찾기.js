function solution(num, k) {
    let answer = -1;
    let tmp = num;
    let seat = 1;
    
    while(tmp){
        if(tmp % 10 === k)  answer = seat;
        seat++;
        tmp = Math.floor(tmp/10);
    }
    
    if(answer !== -1) answer = seat-answer;
    
    return answer;
}