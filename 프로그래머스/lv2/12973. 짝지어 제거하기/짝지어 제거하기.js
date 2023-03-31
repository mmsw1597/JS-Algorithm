function solution(s){
    let answer = 0;
    let stack = [];
    
    for(let c of s){
        if(stack.length && stack[stack.length - 1] === c){
            stack.pop();
        }else{
            stack.push(c);
        }
    }
    if(!stack.length) answer = 1;
    return answer;
}