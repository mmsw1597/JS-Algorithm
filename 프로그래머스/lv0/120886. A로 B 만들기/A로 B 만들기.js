function solution(before, after) {
    let answer = 1;
    let af = after.split('');
    
    for(let x of before){
        let idx = af.findIndex(v => v === x);
        if(idx === -1){
            answer = 0;
            break;
        }
        else{
            af.splice(idx, 1);
        }
    }
    return answer;
}