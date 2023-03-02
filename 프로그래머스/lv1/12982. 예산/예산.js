function solution(d, budget) {
    let answer = 0;
    
    d.sort((a,b) => a-b);
    
    for(let x of d){
        if(budget - x >= 0){
            answer++;
            budget -= x;
        }else break;
    }
    
    return answer;
}