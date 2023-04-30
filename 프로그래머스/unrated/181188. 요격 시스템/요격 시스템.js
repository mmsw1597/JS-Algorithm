function solution(targets) {
    let answer = 1;
    
    targets.sort((a, b) => {
        if(a[0] === b[0]){
            return ((b[1] - b[0]) - (a[1] - a[0]));
        }
        return a[0] - b[0];
    })
    
    let [start, end] = targets[0];
    
    for(let [s, e] of targets){
        if(s < end){
            end = Math.min(e, end);
        }else{
            answer += 1;
            end = e;
        }
    }
    
    return answer;
}