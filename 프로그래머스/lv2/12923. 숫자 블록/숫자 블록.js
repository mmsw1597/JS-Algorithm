function solution(begin, end) {
    let answer = [];
    
    const findMax = (v) => {
        if(v === 1) return 0;
        let tmp = [];
        for(let i = 2; i<=Math.sqrt(v); i++){
            if(v % i === 0){
                if((v/i) <= 10000000)  return v / i;
                else tmp.push(i);
            } 
        }
        if(tmp.length) return Math.max(...tmp);
        else return 1;
    }
    
    for(let i = begin; i<=end; i++){
        answer.push(findMax(i));
    }
    
    return answer;
}

//n이 1인 경우는 0
//n이 소수인 경우는 1
//n의 약수 중 107 이하인 가장 큰 수