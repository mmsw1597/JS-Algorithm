function solution(s) {
    let answer = s.split("").sort((a, b) => b.charCodeAt() - a.charCodeAt()).join("");
    return answer;
}