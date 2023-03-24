function solution(numbers, target) {
    let answer = 0;
    let queue = [0];
    let level = 0;
    
    while(queue.length && level < numbers.length){
        const tmp = queue;
        queue = [];
        
        for(let x of tmp){
            queue.push(x + numbers[level]);
            queue.push(x - numbers[level]);
        }
        
        level++;
    }
    
    for(let x of queue){
        if(x === target) answer++;
    }
    
    
    return answer;
}