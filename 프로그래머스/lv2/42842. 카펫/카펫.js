function solution(brown, yellow) {
    let answer = [];
    const list = [];
    
    for(let i=1; i<=Math.sqrt(yellow); i++){
        if(yellow % i === 0){
            list.push([i, yellow/i]);
        }
    }
    
    for(let [row, col] of list){
        if((4 + row*2 + col*2) === brown)
            return [col + 2, row + 2];
    }
    
    return answer;
}