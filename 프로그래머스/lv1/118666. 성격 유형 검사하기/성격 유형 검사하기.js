function solution(survey, choices) {
    let answer = '';
    const score = {
        R : 0,
        T : 0,
        C : 0,
        F : 0,
        J : 0,
        M : 0,
        A : 0,
        N : 0
    };
    let idx = 0;
    for(let str of survey){
        const choice = choices[idx++];
        const cal = (choice - 4) % 4;
        if(cal < 0){
            score[str[0]] += (-cal);
        }else if(cal > 0){
            score[str[1]] += cal;
        }
    }
    
    if(score.R >= score.T) answer += "R";
    else answer += "T";
    
    if(score.C >= score.F) answer += "C";
    else answer += "F";
    
    if(score.J >= score.M) answer += "J";
    else answer += "M";
    
    if(score.A >= score.N) answer += "A";
    else answer += "N";
    
    return answer;
}