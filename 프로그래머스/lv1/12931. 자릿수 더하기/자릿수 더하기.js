function solution(n){
    let answer = String(n).split("").reduce((acc, v) => acc + +v, 0);

    return answer;
}