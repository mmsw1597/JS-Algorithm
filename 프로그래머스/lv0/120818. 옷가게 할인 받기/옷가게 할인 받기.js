function solution(price) {
    let answer = price;
    
    if(price >= 500000) answer = Math.floor(answer * 0.8);
    else if(price >= 300000) answer = Math.floor(answer * 0.9);
    else if(price >= 100000) answer = Math.floor(answer * 0.95);
    
    return answer;
}