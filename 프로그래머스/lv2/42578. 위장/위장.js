function solution(clothes) {
    let answer = 1;
    const map = {};
    
    for(let [name, type] of clothes){
        if(!map[type]) map[type] = [name];
        else map[type].push(name);
    }
    
    for(let [key, value] of Object.entries(map)){
        answer *= (value.length+1);
    }
    
    return answer-1;
}