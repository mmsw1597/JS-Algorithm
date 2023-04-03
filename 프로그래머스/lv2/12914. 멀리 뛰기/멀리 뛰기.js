function solution(n) {
    let answer = 0;
    let dp = Array.from({length: n + 1}, ()=>0);
    dp[0] = 1;
    dp[1] = 1;
    console.log(dp[n]);
    for(let i = 2; i<=n; i++){
        dp[i] = (dp[i-1] + dp[i-2]) % 1234567;
    }
    

    return dp[n];
}