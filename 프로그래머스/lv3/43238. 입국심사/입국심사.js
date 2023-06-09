function solution(n, times) {
    let answer = 0;
    const max = Math.max(...times);
    
    let lt = 1;
    let rt = max * n;
    
    const check = (t) => {
        let cnt = 0;
        times.forEach((v) => {
            cnt += Math.floor(t / v);
        })
        
        if(cnt >= n) return true;
        else return false;
        
    }
    
    while(lt <= rt){
        const mid = Math.floor((lt + rt) / 2);
        if(check(mid)){
            answer = mid;
            rt = mid - 1;
        }else{
            lt = mid + 1;
        }
    }
    
    return answer;
}