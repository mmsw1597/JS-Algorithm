function solution(sides) {
    let answer = 0;
    let m = Math.max(...sides);
    let idx = sides.findIndex(num => num === m);
    sides.splice(idx, 1);
    let sum = 0;
    for(let x of sides){
        sum += x; 
    }
    
    if(sum > m) answer = 1;
    else answer = 2;
    
    return answer;
}