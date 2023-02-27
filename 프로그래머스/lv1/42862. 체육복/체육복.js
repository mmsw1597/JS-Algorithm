function solution(n, lost, reserve) {
    let answer = (n - lost.length);
    let except = [];
    
    lost.forEach((v, i) => {
         const same = reserve.findIndex((r) => r===v);
        if(same !== -1) {
            answer++;
            reserve.splice(same, 1);
            except.push(v);
            return;
        }
    })
    
    lost.sort((a,b) => a-b);
    reserve.sort((a,b) => a-b);
    
    lost.forEach((v, i) => {
        if(except.includes(v)) return;
        const front = reserve.findIndex((r) => v-1 === r);
        const back = reserve.findIndex((r) => v+1 === r);
        
        if(front !== -1) {
            reserve.splice(front, 1);
            answer++;
        }
        else if(back !== -1){
            reserve.splice(back, 1);
            answer++;
        }
    })
    return answer;
}