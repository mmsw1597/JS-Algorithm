function solution(ingredient) {
    let answer = 0;
    let queue = []
    
    for(let x of ingredient){
        queue.push(x);
        let n = queue.length;
        while(n >= 4 && queue[n - 1] === 1 && queue[n-2] === 3 && queue[n-3]===2 && queue[n-4] === 1){
            answer++;
            for(let i = 0; i<4; i++) queue.pop();
            n = queue.length - 1;
        }
    }
    
    return answer;
}