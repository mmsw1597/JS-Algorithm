function solution(array, height) {
    let answer = array.reduce((acc, v)=>{
        if(v > height) return acc+1;
        else return acc;
    },0);
    return answer;
}