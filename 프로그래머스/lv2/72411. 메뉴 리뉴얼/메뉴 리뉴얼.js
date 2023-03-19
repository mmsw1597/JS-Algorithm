function solution(orders, course) {
    let answer = [];
    let map = {};
    let tmp = [];
    let set;
    
    function DFS(order, cur, max, idx){
        if(cur === max){
            let ttmp = tmp.slice();
            set.add(ttmp.sort().join(""));
            return;
        }
        
        for(let i = idx; i<order.length; i++){
            tmp.push(order[i]);
            DFS(order, cur+1, max, i + 1);
            tmp.pop();
        }
    }
    let max = 0;
    for(let c of course){
        map = {};
        max = 0;
        for(let order of orders){
            set = new Set();
            tmp = [];
            DFS(order, 0, c, 0);
            for(let s of [...set]){
                map[s] = map[s] ? map[s] + 1 : 1;
                if(map[s] > max) max = map[s];
            }
        }
        for(let [k, v] of Object.entries(map)){
            if(max === v && max > 1){
                answer.push(k);
            }    
        }
    }
    
    return answer.sort();
}