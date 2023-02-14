function solution(s) {
    let answer = [];
    let hash = new Map();
    
    for(let i = 0; i<s.length; i++){
        if(hash.has(s[i])) answer.push(i - hash.get(s[i]));
        else answer.push(-1);
        hash.set(s[i], i)
    }
    
    return answer;
}