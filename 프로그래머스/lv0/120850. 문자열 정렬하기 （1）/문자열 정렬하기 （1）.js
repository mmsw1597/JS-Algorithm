function solution(my_string) {
    let answer = [];
    
    for(let x of my_string){
        if(!isNaN(x)) answer.push(Number(x));
    }
    
    answer.sort((a,b) => a-b);
    
    return answer;
}