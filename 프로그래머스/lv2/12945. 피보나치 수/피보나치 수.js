function solution(n) {
    let answer = 0;
    let map = {
        0 : 0,
        1 : 1,
    };
    
    for(let i = 2; i<=n; i++){
        map[i] = (map[i-1] + map[i-2]) % 1234567;
    } 
    
    
    return map[n];
}