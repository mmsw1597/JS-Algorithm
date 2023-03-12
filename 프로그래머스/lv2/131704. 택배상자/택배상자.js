function solution(order) {
    let answer = 0;
    const stack = [];
    let target = order[0];
    
    for(let i = 1; i<=order.length; i++){
        if(i === target){
            answer++;
            target = order[answer];
        }else{
            stack.push(i);
        }
        
        while(stack.length && stack[stack.length - 1] === target){
            answer++;
            target = order[answer];
            stack.pop();
        }
    }
    
    return answer;
}