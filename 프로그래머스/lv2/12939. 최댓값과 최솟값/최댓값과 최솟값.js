function solution(s) {
    let answer = '';
    let max = -Infinity;
    let min = Infinity;
    const arr = s.split(" ").map((v) => +v);
    
    for(let x of arr){
        if(max < x) max = x;
        if(min > x) min = x;
    }
    
    answer += min;
    answer += " " + max;
    
    return answer;
}