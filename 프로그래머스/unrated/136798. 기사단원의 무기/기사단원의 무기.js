function solution(number, limit, power) {
    let answer = 0;
    let ch = Array.from({length: number+1}, ()=>0);
    
    function cal(n){
        let map = new Map();
        let fix = n;
        for(let i = 2; i<= n; i++){
            while((n % i) === 0){
                if(map.has(i)) map.set(i, map.get(i) + 1);
                else map.set(i, 2);
                n/=i;
            }
        }     
        let arr = [...map.values()];
        let sum = arr.reduce((acc, v)=>{
            return acc * (v);
        }, 1)
        
        return sum;
    }
    
    for(let i = 1; i<=number; i++){
        let x = cal(i);
        if(x > limit) answer += power;
        else answer += x;
    }
    
    return answer;
}