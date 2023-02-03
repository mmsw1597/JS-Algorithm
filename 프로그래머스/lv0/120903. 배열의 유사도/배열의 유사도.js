function solution(s1, s2) {
    let answer = 0;
   
    for(let one of s1){
        for(let two of s2){
            if(one === two) answer++;
        }
    }
    
    return answer;
}