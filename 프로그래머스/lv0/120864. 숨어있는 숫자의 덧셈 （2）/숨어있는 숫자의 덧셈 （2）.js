function solution(my_string) {
    let answer = 0;
    let str = my_string.replace(/[a-zA-Z]+/g, "k");
    
    for(let x of str.split('k')){
        answer += Number(x);
    }
    
    return answer;
}