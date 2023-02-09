function solution(age) {
    let answer = '';
    let arr = "abcdefghij";
    
    for(let x of age.toString()){
        answer += arr[Number(x)];
    }
    
    return answer;
}