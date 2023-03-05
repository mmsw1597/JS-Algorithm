function solution(s){
    let num_p = 0;
    let num_y = 0;
    
    for(let x of s){
        const ch = x.toLowerCase();
        
        if(ch === "p") num_p++;
        else if(ch === "y") num_y++;
    }
    
    if(num_p === num_y) return true;
    else return false;
}