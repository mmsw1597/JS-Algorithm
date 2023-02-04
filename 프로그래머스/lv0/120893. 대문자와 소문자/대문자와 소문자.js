function solution(my_string) {
    let answer = '';
    let str = 'az';
    
    for(let x of my_string){
        if(x.charCodeAt(0) >= str.charCodeAt(0) && x.charCodeAt(0) <= str.charCodeAt(1))
            answer += x.toUpperCase();
        else
            answer += x.toLowerCase();
    }
    return answer;
}