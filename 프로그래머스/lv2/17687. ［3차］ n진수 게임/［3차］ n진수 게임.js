function solution(n, t, m, p) {
    let answer = '';
    let round = 0;
    let target = 0;
    p -= 1;
    
    while(answer.length < t){
        let trans = target.toString(n);
        for(let x of trans){
            if(round % m === p)
                answer += x.toUpperCase();
            if(answer.length === t)
                break;
            round++;
        }
        target++;
    }
    
    return answer;
}