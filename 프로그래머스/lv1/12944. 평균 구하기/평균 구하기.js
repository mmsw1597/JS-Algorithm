function solution(arr) {
    let answer = 0;
    
    return arr.reduce((acc, v)=>acc+v, 0) / arr.length;
}