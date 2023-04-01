function solution(s) {
    let answer = '';
    let isStart = true;
    let arr = [];
    let tmp = "";
    
    for(let c of s){
        if(c === " "){
            isStart = true;
            answer += " "
            continue;
        }
        
        if(isStart){
            answer += c.toUpperCase();
            isStart = false;
        }else{
            answer += c.toLowerCase();
        }
    }
    
    return answer;
}