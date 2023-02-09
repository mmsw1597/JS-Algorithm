function solution(array, n) {
    let answer = array.reduce((acc, v)=>{
        if(v === n) return acc+1;
        else return acc;
    }, 0);
    return answer;
}