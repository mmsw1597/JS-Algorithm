function solution(n) {
    let answer = 0;
    const arr = Array.from({length : n}, (_, i) => i + 1);
    let s = 0;
    let e = 1;
    let sum = arr[s];
    
    while(e <= Math.ceil(arr.length/2)){
        if(sum === n) answer++;
        if(sum > n){
            sum -= arr[s];
            s += 1;
        }else{
            sum += arr[e];
            e += 1;
        }
    }
    
    if(n !== 1) answer++;
    
    return answer;
}