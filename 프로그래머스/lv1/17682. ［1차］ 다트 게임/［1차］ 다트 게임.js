function solution(dartResult) {
    let answer = 0;
    let score = [];
    let parse = [];
    let idx = 0;
    const mul = {
        S : 1,
        D : 2,
        T : 3
    };
    
    (dartResult.split(/[SDT#*]/)).forEach((v)=>{
        if(v){
            score.push(+v);
        }
    });
    console.log(score);
    dartResult.split(/[0-9]/).forEach((v) =>{
        if(v){
            parse.push(v);
        }
    });
    console.log(parse);
    
    for(let x of parse){
        score[idx] = score[idx] ** mul[x[0]];
        if(x[1] === "*"){
            score[idx] *= 2;
            score[idx-1] *= 2;
        }else if(x[1] === "#"){
            score[idx] *= -1;
        }
        console.log(score);
        idx++;
    }
    
    for(let i = 0; i<3; i++){
        answer += score[i];
    }
    return answer;
}