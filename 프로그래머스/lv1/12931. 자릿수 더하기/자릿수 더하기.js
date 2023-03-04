function solution(n){
    let answer = String(n).split("").map((v) => +v).reduce((acc, v) => acc + v , 0);

    return answer;
}