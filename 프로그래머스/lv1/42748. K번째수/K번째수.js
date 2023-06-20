function solution(array, commands) {
    let answer = [];
    
    commands.forEach(([i, j, k]) => {
        i -= 1; k -= 1;
        answer.push(array.slice(i, j).sort((a, b) => a - b)[k]);
    })
    
    return answer;
}