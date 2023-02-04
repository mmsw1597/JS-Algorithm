function solution(my_string, num1, num2) {
    let answer = my_string.split('');
    
    let tmp = answer[num1];
    answer[num1] = answer[num2];
    answer[num2] = tmp;
    
    answer = answer.join('');
    
    return answer;
}