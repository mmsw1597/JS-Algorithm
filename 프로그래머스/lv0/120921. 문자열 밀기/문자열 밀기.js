function solution(A, B) {
    let answer = 0;
    let queue = A.split("");
    
    for(let i = 0; i<A.length; i++){
        let tmp = queue.join("");
        if(tmp === B) break;
        queue.unshift(queue.pop());
        answer++;
    }
    
    if(answer === A.length ) answer = -1;
    
    return answer;
}