function solution(balls, share) {
    let answer = 0;
    let ch = Array.from(Array(balls + 1), ()=>Array(balls + 1).fill(0));
    
    function DFS(n, r){
        if(r === 0) return 1;
        if(n === r) return 1;
        if(ch[n][r]) return ch[n][r];
        
        return ch[n][r] = DFS(n-1, r-1) + DFS(n-1, r);
    }
    answer = DFS(balls, share);
    return answer;
}