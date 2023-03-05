function solution(nums) {
    let answer = 0;
    const set = new Set([...nums]);
    const arr = [...set];
    
    answer = Math.min(nums.length/2, arr.length);
    
    return answer;
}