function solution(n) {
    let answer = '';
    let map = {
        0 : "4",
        1 : "1",
        2 : "2"
    }
    
    function DP(N){
        if(N <= 3) return map[N % 3];
        
        let K = Math.floor(N / 3);
        if(N % 3 === 0) K -= 1;
        
        return DP(K) + map[N % 3];
    }
    
    return DP(n);
}