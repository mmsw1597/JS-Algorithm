// 한 글자 X
// 중복 글자 X

function solution(n, words) {
    const memory = {};
    let round = 1;
    let number = 1;
    let prevWord = '';
    
    for(let word of words) {
        if(prevWord && prevWord[prevWord.length - 1] !== word[0]) {
            return [number, round];
        }
        if(memory[word]) {
            return [number, round];
        }
        if(word.length === 1) {
            return [number, round];
        }
        
        memory[word] = true;
        prevWord = word;
        number += 1;
        if(number > n) {
            round += 1;
            number = 1;
        }
    }

    
    return [0, 0];
}