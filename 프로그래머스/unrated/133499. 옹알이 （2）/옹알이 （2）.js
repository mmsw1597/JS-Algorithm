function solution(babbling) {
    let answer = 0;
    let pro = [];
    
    for(let x of babbling){
        x =x.replace(/aya/g, '0');
        x =x.replace(/ye/g, '1');
        x =x.replace(/woo/g, '2');
        x =x.replace(/ma/g, '3');
        
        if(!isNaN(Number(x))){
            let prev = '';
            let flag = true;
            for(let c of x){
                if(prev === c){
                    flag = false;
                    break;
                }
                prev = c;
            }
            if(flag) answer++;
        }
    }
    
    return answer;
}