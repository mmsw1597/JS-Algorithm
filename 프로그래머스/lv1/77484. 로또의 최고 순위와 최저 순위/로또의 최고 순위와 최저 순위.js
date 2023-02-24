function solution(lottos, win_nums) {
    let answer = [];
    let count = 0;
    let zero = 0;
    lottos.forEach((v, i)=>{
        if(v === 0) {
            zero++;
            return;
        }
        const index = win_nums.findIndex(num => num === v);
        if(index !== -1){
            win_nums.splice(index, 1);
            count++;
        }
    })
    
    answer.push(7 - (count + zero));
    answer.push(7 - count);
    answer = answer.map((v)=>{
        if(v >= 7) return 6;
        else return v;
    })
    
    return answer;
}