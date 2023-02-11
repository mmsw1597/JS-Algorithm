function solution(s) {
    let answer = 0;
    let tmp = [];
    let same = 0;
    let diff = 0;
    
    for(let x of s){
        if(tmp.length === 0) {
            same = 1;
            tmp.push(x);
        }else{
            if(x === tmp[0]) same++;
            else diff++;
        }
        
        if(same === diff){
            answer++;
            same = 0;
            diff = 0;
            tmp.pop();
        }
    }
    if(tmp.length) answer++;
    
    return answer;
}