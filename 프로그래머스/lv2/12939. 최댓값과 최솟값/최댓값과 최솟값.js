function solution(s) {
    const numbers = s.split(" ").map(v => +v);
    const maxNum = Math.max(...numbers);
    const minNum = Math.min(...numbers);
    
    return `${minNum} ${maxNum}`;
}