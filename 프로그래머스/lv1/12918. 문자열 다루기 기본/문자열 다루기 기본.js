function solution(s) {
    let answer = true;
    
    if(s.match(/[^0-9]/g))
        return false;
    if(s.length !== 4 && s.length !== 6)
        return false;
    
    return answer;
}