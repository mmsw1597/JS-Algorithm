function solution(numbers) {
    let answer = Array.from({length: numbers.length}, () => -1);
    const stack = [];
    
    numbers.forEach((v, i) =>{
        while(stack.length && stack[stack.length - 1][0] < v){
            const [value, idx] = stack.pop();
            answer[idx] = v;
        }
        stack.push([v, i]);
    })
    
    return answer;
}