function solution(n) {
    let answer = 0;
    let str = "";
    let tmp = 1;
    
    while(n){
        str += n % 3;
        n /= 3;
        n = Math.floor(n);
    }
    
    str = str.split("").reverse();
    
    for(let i = 0; i<str.length; i++){
        answer += tmp * str[i];
        tmp *= 3;
    }
    
    return answer;
}