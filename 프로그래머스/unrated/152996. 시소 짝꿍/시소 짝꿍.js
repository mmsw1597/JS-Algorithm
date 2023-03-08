function solution(weights) {
    let answer = 0;
    const human = {};
    const cal = {};
    const set = [...new Set(weights)];
    
    for(let x of weights){
        human[x] = human[x] ? human[x] + 1 : 1;
    }
    
    for(let x of set){
        cal[x * 2] = cal[x * 2] ? [...cal[x*2], x] : [x];
        cal[x * 3] = cal[x * 3] ? [...cal[x*3], x] : [x];
        cal[x * 4] = cal[x * 4] ? [...cal[x*4], x] : [x];
    }
    for(let key of Object.keys(human)){
        if(human[key] >= 2) answer += human[key] * (human[key] - 1) / 2;
    }
    const duo = [];
    
    function DFS(num, len, idx, arr){
        if(num === 2){
            answer += (human[duo[0]] * human[duo[1]]);
            return;
        }
        
        for(let i = idx; i<len; i++){
            duo[duo.length] = arr[i];
            DFS(num+1, len, i+1, arr);
            duo.pop();
        }
    }
    
    for(let key of Object.keys(cal)){
        if(cal[key].length >= 2){
            DFS(0, cal[key].length, 0, cal[key]);
        }
    }
    
    return answer;
}