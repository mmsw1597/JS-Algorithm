function solution(phone_number) {
    let answer = '';
    let star = "";
    
    for(let i = 0; i<phone_number.length - 4; i++){
        star += "*";
    }
    
    for(let i = phone_number.length-4; i<phone_number.length; i++){
        answer += phone_number[i];
    }
    
    return star + answer;
}