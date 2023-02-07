function solution(num_list, n) {
    let answer = [];
    let tmp = [];
    for(let i = 0; i<num_list.length; i++){
        tmp.push(num_list[i]);
        if(tmp.length === n){
            answer.push(tmp.slice());
            tmp = [];
        }
    }
    
    return answer;
}