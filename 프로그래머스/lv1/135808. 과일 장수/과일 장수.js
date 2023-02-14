function solution(k, m, score) {
    let answer = 0;
    let tmp = [];
    score.sort((a,b) => b-a);
    
    for(let x of score){
        tmp.push(x);
        
        if(tmp.length === m){
            let min = Math.min(...tmp);
            answer += min * m;
            tmp = [];
        }
    }
   
    return answer;
}