function solution(scores) {
    let answer = 0;
    scores[0].push("my");
    let cutLine = -1;
    const map = {};
    
    scores.sort((a, b) => {
        if(b[0] === a[0]) return a[1] - b[1];
        return b[0] - a[0];
    });
    
    console.log(scores);
    
    let M = scores[scores.length - 1][0];
    
    const filtered = scores.filter((v, i) => {
        let [att, co] = v;
        
        if(v === M) {
            cutLine = Math.max(co, cutLine);
            return true;
        }
        else if(co < cutLine){
            return false;
        }
        else{
            cutLine = co;
            return true;
        }
    })
    const sumArr = filtered.map((v) => {
        if(v[2]) return [v[0]+v[1], "my"]; 
        else return [v[0]+v[1]];
    }).sort((a, b) => b[0] - a[0]);
    
    let cnt = 1;
    let rank = 1;
    let prev = -1;
    
    for(let [sum, flag] of sumArr){
        if(prev !== sum) rank = cnt;
        prev = sum;
        if(flag) return rank;
        cnt++;
    }

    return -1;
}