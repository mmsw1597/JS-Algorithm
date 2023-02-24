function solution(new_id) {
    let answer = new_id.split("");
    
    answer = answer.map((v)=>{
        return v.toLowerCase();
    })
    
    answer = answer.join("");
    answer = answer.replace(/[^0-9a-z._-]/gi, "");
    answer = answer.replace(/[.]+/g, ".");
    answer = answer.replace(/^\./g, "");
    answer = answer.replace(/\.$/g, "");
    if(answer.length === 0) answer = "a";
    if(answer.length >= 16){
        answer = answer.substring(0, 15);
        answer = answer.replace(/\.$/g, "");
    }
    if(answer.length <= 2){
        while(answer.length !== 3){
            answer += answer[answer.length - 1];
        }
    }
    
    console.log(answer);
    
    return answer;
}