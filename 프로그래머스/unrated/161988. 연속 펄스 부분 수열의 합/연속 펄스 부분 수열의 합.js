function solution(sequence) {
    let answer = 0;
    const seq1 = sequence.map((v, i) => {
        if(i % 2 === 0)
            return v;
        else return v * (-1);
    });
    
    const seq2 = sequence.map((v, i) => {
        if(i % 2 === 1)
            return v;
        else return v * (-1);
    })
    
    const sum1 = Array.from({length : sequence.length}, () => 0);
    const sum2 = Array.from({length : sequence.length}, () => 0);
    
    seq1.forEach((v, i) => {
        if(i > 0) sum1[i] = v + sum1[i-1];
        else sum1[i] = v;
    })
    
    seq2.forEach((v, i) => {        
        if(i > 0) sum2[i] = v + sum2[i-1];
        else sum2[i] = v;
    })
    
    let lt = 0;
    let rt = 1;
    let max1 = sum1[0];
    
    while(rt < sum1.length){
        if(sum1[lt] < sum1[rt]){
            max1 = Math.max(sum1[rt] - sum1[lt], max1, sum1[rt]);
            rt++;
        }else{
            lt = rt;
            max1 = Math.max(sum1[lt], max1);
            rt++;
        }
    }
    
    lt = 0;
    rt = 1;
    let max2 = sum2[0];
    
    while(rt < sum2.length){
        if(sum2[lt] < sum2[rt]){
            max2 = Math.max(sum2[rt] - sum2[lt], max2, sum2[rt]);
            rt++;
        }else{
            lt = rt;
            max2 = Math.max(sum2[lt], max2);
            rt++;
        }
    }
    
    answer = Math.max(max1, max2);
    
    return answer;
}