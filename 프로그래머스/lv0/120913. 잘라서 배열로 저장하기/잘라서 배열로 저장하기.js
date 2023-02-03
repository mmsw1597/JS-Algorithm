function solution(my_str, n) {
    let answer = [];
    let s = 0;
    let e = n;
    for(let i = 0; i<Math.ceil(my_str.length / n); i++){
        answer.push(my_str.substring(s, e));
        s = e;
        e += n;
    }
    
    return answer;
}