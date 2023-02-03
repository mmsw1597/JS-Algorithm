function solution(my_string) {
    let answer = 0;
    let str = my_string.split(' ');
    let op = str.filter((v)=>v === "+" || v==="-")
    let sum = +str[0];
    let idx = 0;
    
    for(let i = 1; i<str.length; i++){
        if(str[i] === "+" || str[i] === "-") continue;
        
        if(op[idx++] === "+") sum += +str[i];
        else sum -= +str[i];
    }
    
    answer =sum;
    
    return answer;
}