function solution(name, yearning, photo) {
    let answer = [];
    let score = {};
    let idx = 0;
    for(let str of name){
        score[str] = yearning[idx++];
    }
    
    for(let arr of photo){
        let sum = 0;
        for(let name of arr){
            if(score[name])
                sum += score[name];
        }
        answer.push(sum);
    }
    
    return answer;
}