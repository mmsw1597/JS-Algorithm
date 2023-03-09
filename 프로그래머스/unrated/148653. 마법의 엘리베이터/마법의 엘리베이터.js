function solution(storey) {
    let answer = 0;
    const numbers = storey.toString().split("");
    
    for(let i = numbers.length - 1; i>=0; i--){
        const n = +numbers[i];
        if(n >= 6){
            answer += (10 - n);
            if(i !== 0) numbers[i-1] = +numbers[i-1] + 1 + "";
            else answer++;
        }else{
            if(n === 5 && i !== 0){
                const up = numbers[i-1];
                if(up >= 5) numbers[i-1] = +numbers[i-1] + 1 + "";
            }
            answer += n;
        }
        numbers[i] = "0";
    }
    
    return answer;
}