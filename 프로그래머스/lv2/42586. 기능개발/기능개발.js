function solution(progresses, speeds) {
    let answer = [];
    let queue1 = progresses.map((v, i) => [v, i]);
    let start = 0;
    
    while(start < queue1.length){
        for(let i = start; i<queue1.length; i++){
            const [v, idx] = queue1[i];
            queue1[i] = [v + speeds[idx], idx];
        }
        let cnt = 0;
        while(start < queue1.length && queue1[start][0] >= 100){
            start++;
            cnt++;
        }
        
        if(cnt) answer.push(cnt);
    }
    
    return answer;
}