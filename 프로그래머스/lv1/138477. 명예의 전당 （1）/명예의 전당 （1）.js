function solution(k, score) {
    let answer = [];
    let glory = [];
    
    for(let x of score){
        if(glory.length < k) {
            glory.push(x);
        }
        else{
            let min_score = Math.min(...glory);
            if(min_score < x){
                let index = glory.findIndex((v)=> v === min_score);
                glory.splice(index, 1);
                glory.push(x);
            }
        }        
        let min_score = Math.min(...glory);
        answer.push(min_score);
    }   
    return answer;
}