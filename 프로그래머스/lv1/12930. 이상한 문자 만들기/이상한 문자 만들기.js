function solution(s) {
    let answer = "";
    let idx = 0;
    
    while(idx < s.length){
        while(s[idx] === " " && s[idx]){
            answer += " ";
            idx++;
        }
        let i = 0;
        while(s[idx] !== " " && s[idx]){
            if(i % 2){
                answer += s[idx].toLowerCase();
            }else{
                answer += s[idx].toUpperCase();
            }
            i++;
            idx++;
        }
    }

    return answer;
}