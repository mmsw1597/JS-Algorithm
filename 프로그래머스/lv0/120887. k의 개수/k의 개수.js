function solution(i, j, k) {
    let answer = 0;
    let start = i;
    let end = j;
    
    while(start <= end){
        let tmp = start++;
        
        while(tmp){
            if(tmp % 10 === k) answer++;
            tmp = Math.floor(tmp/10);
        }
    }
    
    return answer;
}