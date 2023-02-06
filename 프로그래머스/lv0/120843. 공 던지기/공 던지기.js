function solution(numbers, k) {
    let answer = 0;
    let queue = [...numbers];
    let n = numbers.length;
    
    for(let i= 1; i<k; i++){
        queue.push(queue.shift());
        queue.push(queue.shift());
    }
    
    answer=queue.shift();
    
    return answer;
}