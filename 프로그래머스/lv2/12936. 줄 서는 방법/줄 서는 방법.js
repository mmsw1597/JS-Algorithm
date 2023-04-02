function solution(n, k) {
    let answer = [];
    let arr = Array.from({length : n + 1}, (_, i)=>i);
    let cur = 1;
    
    for(let i = 1; i<n; i++){
        cur *= i;    
    }
    while(arr.length > 2){
        let idx = Math.ceil(k / cur);
        answer.push(arr[idx]);
        arr.splice(idx, 1);
        k = k % (cur);
        if(k === 0) k = cur;
        cur /= (arr.length - 1);
    }
    answer.push(arr[1]);
    
    return answer;
}