function solution(n, k) {
    let answer = 0;
    let str = n.toString(k) + "0";
    const numbers = [];
    let tmp = "";
    
    function isPrime(num){
        if(num === 1) return false;
        
        for(let i = 2; i <= Math.sqrt(num); i++){
            if(num % i === 0) return false;
        }
        
        return true;
    }
    
    for(let x of str){
        if(x === "0"){
            if(tmp.length){
                numbers.push(+tmp);
                tmp = "";
            }
        }else{
            tmp += x;
        }
    }
    
    for(let x of numbers){
        if(isPrime(x)) answer++;
    }
    
    return answer;
}