function solution(cards1, cards2, goal) {
    let answer = 'No';
    
    let p1 = 0;
    let p2 = 0;
    let p = 0;
    while((p1 < cards1.length || p2 < cards2.length) && p < goal.length){
        if(goal[p] === cards1[p1]){
            p++;
            p1++;
            continue;
        }
        
        if(goal[p] === cards2[p2]){
            p++;
            p2++;
            continue;
        }
        
        break;
    }
    console.log(p);
    if(p === goal.length) answer = "Yes";
    
    return answer;
}