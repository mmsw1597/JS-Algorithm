function solution(arr) {
    const answer = [];
    
    arr.forEach((v, i) => {
        if(!answer.length){
            answer.push(v);
        }
        else if(answer[answer.length - 1] === v){
            answer.pop();   
        }else{
            answer.push(v);
        }
    })
    
    if(!answer.length){
        answer.push(-1);
    }
    
    return answer;
}