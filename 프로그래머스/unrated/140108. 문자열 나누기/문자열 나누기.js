function solution(s) {
    let answer = 0;
    
    for(let i = 0; i<s.length; i++) {
        let firstLetterCount = 1;
        let othersCount = 0;
        let nextIndex = i + 1;
        const firstLetter = s[i];
        
        while(nextIndex < s.length && 
            firstLetterCount !== othersCount) {
            if(s[nextIndex] === firstLetter) {
                firstLetterCount++;
            }else {
                othersCount++;
            }
            nextIndex++;
        }
        i = nextIndex - 1;
        answer++;
    }
    
    
    return answer;
}