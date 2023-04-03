function solution(n) {
    let answer = 0;
    let k = n + 1;
    let nCnt = n.toString(2).replace(/0/g, "").length;
 
    while(1){
        let kCnt = k.toString(2).replace(/0/g,"").length;
        if(nCnt === kCnt) return k;
        k++;
    }
    
    
    
    return answer;
}