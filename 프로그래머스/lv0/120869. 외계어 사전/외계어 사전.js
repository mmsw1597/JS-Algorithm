function solution(spell, dic) {
    let answer = 2;
    
    for(let word of dic){
        let flag = true;
        for(let ap of spell){
            let idx = word.indexOf(ap);
            if(idx !== -1){
                if(word.indexOf(ap, idx+1) !== -1){
                    flag = false;
                    break;
                }
            }else{
                flag = false;
            }
        }
        if(flag){
            answer = 1;
            break;
        }
    }
    
    return answer;
}