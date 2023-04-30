function solution(sequence, k) {
    let answer = [];
    
    let lt = 0;
    let rt = 0;
    let sum = sequence[0];
    
    while(lt <= rt){
        if(sum === k){
            if(answer.length){
                let [s, e] = answer;
                if(e - s > rt - lt) answer = [lt, rt];
            }else{
                answer = [lt, rt];
            }
        }
        
        if(sum > k){
            sum -= sequence[lt];
            lt += 1;
        }
        else{
            if(rt < sequence.length - 1){
                rt += 1;
                sum += sequence[rt];
            }else break;
        }
    }
    
    
    
    return answer;
}