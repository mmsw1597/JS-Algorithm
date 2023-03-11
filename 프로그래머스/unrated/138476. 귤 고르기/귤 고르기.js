function solution(k, tangerine) {
    let answer = 0;
    const map = new Map();
    let target = tangerine.length - k;
    
    for(let x of tangerine){
        if(!map.has(x)) map.set(x, 1);
        else map.set(x, map.get(x) + 1);
    }
    
    const sorted = [...map].sort((a, b) => a[1] - b[1]);
    answer = sorted.length;
    for(let [k, v] of sorted){
        if(target - v >= 0){
            target -= v;
            answer--;
        }else{
            break;
        }
    }
    
    return answer;
}