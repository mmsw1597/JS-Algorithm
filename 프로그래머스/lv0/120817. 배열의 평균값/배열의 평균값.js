function solution(numbers) {
    let answer = 0;
    answer = numbers.reduce((acc, v)=>{
        return acc+v;
    }, 0)
    answer = answer/numbers.length.toFixed(1);
    
    return answer;
}