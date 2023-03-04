function solution(num) {
    let answer = 0;
    
    while(num !== 1 && answer < 500){
        if(num % 2){
            num *= 3;
            num += 1;
        }else{
            num /= 2;
        }
        answer++;
    }
    
        
    return answer === 500 ? -1 : answer;
}