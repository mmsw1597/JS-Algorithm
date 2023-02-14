function solution(X, Y) {
    let answer = '';
    let common = [];
    let xcnt = Array.from({length: 10}, ()=>0);
    let ycnt = Array.from({length: 10}, ()=>0);
    
    for(let x of X){
        xcnt[Number(x)]++;
    }
    
    for(let y of Y){
        ycnt[Number(y)]++;
    }
    
    for(let i = 0; i<10; i++){
        common.push(Math.min(xcnt[i], ycnt[i]));
    }
    
    for(let i = 9; i>=0; i--){
        for(let j = 0; j<common[i]; j++){
            answer += i;
        }
    }
    
    if(answer[0] === '0') answer = '0';
    else if(answer.length === 0) answer = '-1';
    
    return answer;
}