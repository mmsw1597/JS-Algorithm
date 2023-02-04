function solution(score) {
    let answer = [];
    let avg = score.map(v => {
        return Math.floor((v[0] + v[1])/2) + ((v[0]+v[1]) % 2);
    })
    
    avg.sort((a,b) => b-a);
    
    answer = score.map(v=>{
        let cal = Math.floor((v[0] + v[1])/2) + ((v[0]+v[1]) % 2);
        
        return avg.findIndex(v => v === cal) + 1;
    })
    
    return answer;
}