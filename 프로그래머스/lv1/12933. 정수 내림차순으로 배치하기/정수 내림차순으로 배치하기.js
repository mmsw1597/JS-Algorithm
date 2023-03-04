function solution(n) {
    let arr = String(n).split("").sort((a, b) => {
        return +b - +a;
    })
    arr = arr.join("");
    return +arr;
}