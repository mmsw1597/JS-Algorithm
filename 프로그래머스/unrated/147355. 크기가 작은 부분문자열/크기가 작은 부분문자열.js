function solution(t, p) {
    let answer = 0;
    
    for(let i = 0; i<=t.length - p.length; i++){
        let tmp = Number(t.slice(i, i+p.length));
        if(tmp <= Number(p))
            answer++;
    }
    
    return answer;
}