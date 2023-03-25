function solution(number, k) {
    let answer = '';
    let prev = 10;
    let alive = Array.from({length: number.length}, () => true);
    let start = 0;
    
    function erase(idx, target){
        for(let i = idx - 1; i>=start; i--){
            if(!k) return;
            if(number[i] >= target) return;
            if(alive[i] && number[i] < target){
                alive[i] = false;
                k--;
            }
        }
        start = idx;
    }
    
    for(let i = 0; i<number.length; i++){
        if(prev < number[i]) erase(i, number[i]);    
        if(!k) break;
        prev = number[i];
    }
    
    if(k){
        for(let i = number.length; i--; i>=0){
            if(!k) break;
            if(alive[i]){
                k--;
                alive[i] = false;
            }
        }
    }
    for(let i = 0; i<number.length; i++){
        if(alive[i]) answer += number[i];
    }
    
    return answer;
}