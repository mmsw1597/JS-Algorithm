function solution(n, m) {
    var answer = [];
    const max = Math.max(n, m);
    const min = Math.min(n, m);
    function GCD(a, b){
        return a % b === 0 ? b : GCD(b, a%b);
    }
    const gcd = GCD(max, min);
    answer.push(gcd, n*m/gcd);
    
    return answer;
}