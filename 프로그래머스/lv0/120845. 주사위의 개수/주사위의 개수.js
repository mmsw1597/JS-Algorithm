function solution(box, n) {
    let answer = 1;
    answer *= Math.floor(box[0] / n);
    answer *= Math.floor(box[1] / n);
    answer *= Math.floor(box[2] / n);
    
    return answer;
}