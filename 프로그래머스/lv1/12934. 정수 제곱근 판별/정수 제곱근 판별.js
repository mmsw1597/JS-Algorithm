function solution(n) {
    let answer = 0;
    let cal = Math.sqrt(n);
    if(Math.floor(cal) === Math.ceil(cal)){
        return (cal+1) * (cal+1);
    }
    
    return -1;
}