function solution(s) {
    const answer = [];
    const memory = {};
    
    [...s].forEach((letter, index) => {
        memory[letter] >= 0
            ? answer.push(index - memory[letter])
            : answer.push(-1);
        memory[letter] = index;    
    })
    
    return answer;
}