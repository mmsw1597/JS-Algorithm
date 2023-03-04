function solution(arr) {
    let answer = [];
    let idx = 0;
    let min = Number.MAX_SAFE_INTEGER;
    
    for(let i = 0; i<arr.length; i++){
        if(min > arr[i]){
            min = Math.min(min, arr[i]);
            idx = i;
        }
    }
    
    arr.splice(idx, 1);
    if(arr.length === 0)
        arr.push(-1);
    
    return [...arr];
}