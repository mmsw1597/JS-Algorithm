function solution(N, stages) {
    let answer = Array.from({length : N+1}, (_, i) => i);
    const num_user = stages.length;
    const map = new Map();
    const fail = Array.from({length : N+1}, (_, i)=> [0, i]);
    
    function cal_user(target){
        let sum = 0;
        
        for(let i = target; i <= N+1; i++){
            sum += map.get(i);
        }
        return sum;
    }
    
    for(let i = 1; i<=N+1; i++){
        map.set(i, 0);
    }
    
    for(let i = 0; i<num_user; i++){
        map.set(stages[i], map.get(stages[i]) + 1);
    }
    
    for(let i = 1; i<= N; i++){
        fail[i][0] = ( map.get(i) / cal_user(i));
    }
    fail.shift();
    fail.sort((a,b) => {
        if(a[0] === b[0]) return a[1] - b[1];
        else return b[0] - a[0];
    });
    
    answer = fail.map((v) => v[1]);
    
    return answer;
}