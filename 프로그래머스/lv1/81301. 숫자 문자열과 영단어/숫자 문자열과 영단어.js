function solution(s) {
    let answer = s;
    const number = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    number.forEach((v, i) => {
        const regex = new RegExp(`${v}`, 'g');
          answer = answer.replace(regex, i);
    })
    
    return Number(answer);
}