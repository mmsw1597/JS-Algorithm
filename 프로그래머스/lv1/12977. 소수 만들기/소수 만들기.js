function solution(nums) {
    let answer = 0;
    const primeArr = Array.from({length : 3001}, () => true);
    
    for(let i = 2; i * i <= 3000; i++){
        if(primeArr[i]){
            for(let j = i * i; j<=3000; j+=i){
                primeArr[j] = false;            
            }
        }
    }
    
    function DFS(cnt, index, sum){
        if(cnt >= 3){
            if(primeArr[sum]){
                answer++;
            }
            return;
        }
        
        for(let i = index; i<nums.length; i++){
            DFS(cnt + 1, i + 1, sum + nums[i]);
        }
    }
    
    DFS(0, 0, 0);
    
    return answer;
}