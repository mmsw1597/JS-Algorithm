function solution(s) {
    let answer = 0;
    let stack = [];
    let list = s.split(' ');
    
    for(let x of list){
        if(x !== 'Z') stack.push(Number(x));
        else stack.pop();
    }
    
    answer = stack.reduce((acc, v)=>acc+v, 0);
    
    return answer;
}