function solution(a, b, n) {
    let answer = 0;
    
    while(n >= a){
        let div = Math.floor(n/a); 
        let full = div * b; 
        
        n -= div * a;
        n += full;
        answer += full;
    }
    return answer;
}