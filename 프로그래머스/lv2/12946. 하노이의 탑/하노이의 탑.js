function solution(n) {
    let answer = [];
    
    function move(start, end){
        answer.push([start, end]);
    }
    
    function hanoi(n, origin, target, sub){
        if(n <= 1){
            move(origin, target);
            return;
        }
        
        hanoi(n-1, origin, sub, target);
        move(origin, target);
        hanoi(n-1, sub, target, origin);        
    }
    
    hanoi(n, 1, 3, 2);
    return answer;
}