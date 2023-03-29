function solution(cacheSize, cities) {
    let answer = 0;
    let stack = [];
    if(cacheSize === 0) return cities.length * 5;
    
    for(let x of cities){
        x = x.toLowerCase();
        let target = null;
        let save = [];
        
        for(let i = 0; i<stack.length; i++){
            if(stack[i] === x)
                target = stack[i];
            else
                save.push(stack[i]);        
        }
        
        if(target){
            stack = save;
            stack.push(target);
            answer++;
        }
        else{
            if(stack.length < cacheSize)
                stack.push(x);
            else{
                stack.shift();
                stack.push(x);
            }
            answer += 5;
        }
    }
    
    return answer;
}