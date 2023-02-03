function solution(my_string) {
    let answer = '';
    let str = my_string.toLowerCase();
    answer = str.split("").sort().join("");
    return answer;
}