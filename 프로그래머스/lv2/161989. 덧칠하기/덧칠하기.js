function solution(n, m, section) {
    let answer = 0;
    let wall = Array.from({length: n + 1}, () => true);
    
    for(let x of section){
        wall[x] = false;
    }
    
    for(let idx of section){
        if(!wall[idx]){
            answer++;
            for(let i = idx; i < Math.min(idx+m, n+1); i++){
                wall[i] = true;
            }
        }
    }
    
    return answer;
}