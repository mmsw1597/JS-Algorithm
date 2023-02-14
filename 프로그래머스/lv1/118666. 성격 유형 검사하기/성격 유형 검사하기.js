function solution(survey, choices) {
    let answer = '';
    const map = new Map();
    
    map.set('R', 0);
    map.set('T', 0);
    map.set('C', 0);
    map.set('F', 0);
    map.set('J', 0);
    map.set('M', 0);
    map.set('A', 0);
    map.set('N', 0);
    
    for(let i = 0; i<survey.length; i++){
        let score = choices[i] > 4 ? choices[i] % 4 : 4 - choices[i];
        let s = survey[i];
        
        if(choices[i] > 4){
            map.set(s[1], map.get(s[1]) + score);
        }else{
            map.set(s[0], map.get(s[0]) + score);
        }
    }
    
    if(map.get('R') >= map.get('T')) answer += 'R';
    else answer += 'T';
    
    if(map.get('C') >= map.get('F')) answer += 'C';
    else answer += 'F';
    
    if(map.get('J') >= map.get('M')) answer += 'J';
    else answer += 'M';
    
    if(map.get('A') >= map.get('N')) answer += 'A';
    else answer += 'N';
    
    return answer;
}