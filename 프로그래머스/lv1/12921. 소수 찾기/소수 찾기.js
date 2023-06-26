function solution(n) {
    const primeArr = Array.from({length : n + 1}, (_, i) => true);
    let answer = 0;
    
    for(let i = 2; i * i <= n; i++){
        if(primeArr[i]){
            for(let j = i * i; j<=n; j += i){
                primeArr[j] = false;
            }
        }
    }
    
    return primeArr.filter(v => v).length - 2;
}