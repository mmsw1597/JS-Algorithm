function solution(array) {
    let answer = 0;
    let str = array.join("");
    
    for(let x of str){
        if(x === '7') answer++;
    }

    return answer;
}