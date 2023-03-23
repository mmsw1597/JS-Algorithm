function solution(picks, minerals) {
    let answer = Number.MAX_SAFE_INTEGER;
    const m = ["diamond", "iron", "stone"];
    const stick = [];
    const tmp = [];
    const dp = {};
    const list = [[1, 1, 1], [5, 1, 1], [25, 5, 1]];
    const map = {
        "diamond" : 0,
        "iron" : 1,
        "stone" : 2
    };
    
    for(let i = 0; i<3; i++){
        for(let j = 0; j<picks[i]; j++){
            stick.push(m[i]);
        }
    }
    
    const visit = Array.from({length: stick.length}, ()=>false);
    
    function cal(){
        let index = 0;
        let score = 0;
        for(let x of tmp){
            let cnt = 0;
            while(cnt < 5 && index < minerals.length){
                score += list[map[x]][map[minerals[index++]]];
                cnt++;
            }
        }
        return score;
    }
    
    
    function DFS(N){
        if(dp[tmp.join("")])
            return;
        dp[tmp.join("")] = true;
        
        if(5 * N >= minerals.length || tmp.length === stick.length){
            answer = Math.min(answer, cal());
            return;
        }   
        
        for(let i = 0; i<stick.length; i++){
            if(!visit[i]){
                visit[i] = true;
                tmp.push(stick[i]);
                DFS(N+1);
                visit[i] = false;
                tmp.pop();
            }
        }
    }
    
    DFS(0);
    
    return answer;
}