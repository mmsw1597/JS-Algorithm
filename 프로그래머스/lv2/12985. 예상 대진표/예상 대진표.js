function solution(n,a,b){
    let answer = 1;
    let arrA = [];
    let arrB = [];
    let N = n;
    
    function check(a, b){
        let max = Math.max(a, b);
        let min = Math.min(a, b);
        
        if(max % 2 === 0 && min % 2 === 1){
            if(Math.abs(max - min) === 1) return true;
        }
        return false;
    }
    
    while(N > 1 && !check(a, b)){
        if(a % 2 === 0){
            a /= 2;
            arrA.push(a);
        }else{
            a = (a === 1)? 1 : Math.floor(a/2) + 1;
            arrA.push(a);
        }
        
        if(b % 2 === 0){
            b /= 2;
            arrB.push(b);
        }else{
            b = (b===1)? 1 : Math.floor(b/2) + 1;
            arrB.push(b);
        }
        N/=2;
        answer++;
    }
    
    return answer;
}