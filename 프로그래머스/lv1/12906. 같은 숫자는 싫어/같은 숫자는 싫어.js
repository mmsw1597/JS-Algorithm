function solution(arr){
    let answer = [];
    let prev = -1;
    for(let x of arr){
        if(prev !== x){
            answer.push(x);
            prev = x;
        }
    }
    
    
    return answer;
}