function solution(nums) {
    let answer = 0;
    
    function isPrime(num){
        for(let i = 2; i<=Math.sqrt(num); i++){
            if(num % i === 0)
                return false;
        }
        return true;
    }
    
    function DFS(n, sum, idx){
        if(n === 3){
            if(isPrime(sum))
                answer++;
            return;
        }
        
        for(let i = idx; i<nums.length; i++){
            DFS(n+1, sum + nums[i], i+1);
        }
    }
    DFS(0, 0, 0);
    return answer;
}