function solution(citations) {
    let answer = 0;
    
    for(let i = 1; i<=citations.length; i++){
        let cnt = 0;
        for(let j = 0; j<citations.length; j++){
            if(citations[j] >= i) cnt++;
        }
        if(cnt >= i) answer = i;
    }
    
    return answer;
}