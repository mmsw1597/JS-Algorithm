function solution(my_string) {
    let answer = '';
    let fstr = '';
    
    for(let x of my_string){
        if(!answer.includes(x)) answer += x;
    }
    
    return answer;
}