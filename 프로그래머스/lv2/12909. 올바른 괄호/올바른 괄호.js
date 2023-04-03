function solution(s){
    let answer = true;
    let stack = [];
    let cnt = 0;
    
    for(let x of s){
        if(x === "(") {
            if(stack.length > s.length - cnt) return false;
            stack[stack.length] = x;
        }
        else{
            if(!stack.length) return false;
            else stack.pop();
        }
        cnt+=1;
    }
    
    if(stack.length) answer=false;
    
    return answer;
}