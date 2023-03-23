function solution(skill, skill_trees) {
    let answer = 0;
    const regex = new RegExp(`[^${skill}]`, "g");
    
    for(let str of skill_trees){
        str = str.replace(regex, "");
        let flag = false;
        let idx = 0;
        
        for(let x of str){
            if(x !== skill[idx++]){
                flag = true;
                break;
            }
        }
        if(!flag) answer++;
    }
    
    return answer;
}