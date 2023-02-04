function solution(array, n) {
    let answer = Number.MAX_SAFE_INTEGER;
    let diff = Number.MAX_SAFE_INTEGER;
    
    for(let x of array){
        let cal = x-n;
        cal = cal < 0 ? cal * (-1) : cal;
        
        if(diff >= cal){
            if(diff === cal) answer = answer > x ? x : answer;
            else answer = x;
            diff = cal;
        }
    }
    
    return answer;
}