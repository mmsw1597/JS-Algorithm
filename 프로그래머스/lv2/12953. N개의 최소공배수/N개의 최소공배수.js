function solution(arr) {
    let answer = 0;
    
    function GCD(A, B){
        if(A % B === 0) return B;
        
        return GCD(B, A % B);
    }
    
    let tmp = arr[0];
    
    for(let i = 1; i<arr.length; i++){
        tmp = (tmp * arr[i])/ GCD(Math.max(tmp, arr[i]), Math.min(tmp, arr[i]));
    }
    
    return tmp;
}