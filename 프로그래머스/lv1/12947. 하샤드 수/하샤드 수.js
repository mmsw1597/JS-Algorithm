function solution(x) {
    let answer = true;
    let str = String(x).split("");
    let sum = 0;
    
    for(let x of str){
        sum += +x;    
    }
    
    return (x % sum) === 0;
}