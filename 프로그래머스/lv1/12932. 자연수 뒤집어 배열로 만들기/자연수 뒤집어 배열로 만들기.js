function solution(n) {
    let answer = [];
    
    answer = String(n).split("").map((v) => +v).reverse();
    
    return answer;
}