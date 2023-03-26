function solution(priorities, location) {
    let answer = 0;
    let queue = [];
    let custom = priorities.map((v, i) => [v, i]);
    let custom2 = [];
    priorities.sort((a, b) => b-a);
    let max = priorities[0];
    let cnt = 1;
    
    while(custom.length){
        for(let [v, i] of custom){
            if(max > v){
                custom2.push([v, i]);        
            }else{
                if(i === location) return cnt;
                max = priorities[cnt];
                cnt++;
            }
        }
        custom = custom2.slice();
        custom2 = [];
    }
    
    console.log(custom2);
    return answer;
}