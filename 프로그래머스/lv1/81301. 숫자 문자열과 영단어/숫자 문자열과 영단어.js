function solution(s) {
    let answer = s;
    const wordList = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    wordList.forEach((word, i) => {
        const regex = new RegExp(`${word}`, "g");
        answer = answer.replace(regex, i);
    })

    return +answer;    
}

// 단순 replace 함수로는 동작 X