function solution(emergency) {
    let answer = [];
    let arr = emergency.slice();
    arr.sort((a, b) => b-a);
    
    answer = emergency.map((v)=>{
        return arr.findIndex((a)=> a===v) + 1;
    })
    
    return answer;
}