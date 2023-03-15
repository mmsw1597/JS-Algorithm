function solution(n, wires) {
    let answer = Number.MAX_SAFE_INTEGER;
    const map = new Map();
    
    for(let [v1, v2] of wires){
        if(!map[v1]){
            map[v1] = [v2];
        } 
        else {
            map[v1].push(v2);
        }
        
        if(!map[v2]){
            map[v2] = [v1];
        }else{
            map[v2].push(v1);
        }
    }
    
    function BFS(start, ban){
        let queue = [start];
        const visit = Array.from({length: n+1}, () => false);
        visit[start] = true;
        let ret = 1;
        
        while(queue.length){
            const tmp = queue;    
            queue = [];
            
            for(let next of tmp){
                for(let v of map[next]){
                    if(!visit[v] && v !== ban){
                        visit[v] = true;
                        ret++;
                        queue.push(v);
                    }
                }
            }
        }
        return ret;
    }
    
    for(let i = 1; i<=n; i++){
        for(let wire of map[i]){        
            let num1 = BFS(i, wire);
            let num2 = BFS(wire, i);
            answer = Math.min(Math.abs(num1-num2), answer);
        }
    }
    
    
    return answer;
}