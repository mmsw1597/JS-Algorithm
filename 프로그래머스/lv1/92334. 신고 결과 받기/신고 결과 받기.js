function solution(id_list, report, k) {
    let answer = Array.from({length: id_list.length}, () => 0);
    let id = {};
    let count = {};
    let ban = [];
    
    for(let x of id_list){
        id[x] = [];
        count[x] = 0;
    }
    
    for(let r of report){
        let str = r.split(' ');
        let atk = str[0];
        let def = str[1];
        
        if(!id[atk].includes(def)){
            count[def]++;
            id[atk].push(def);
        }
    }
    
    for(let x of id_list){
        if(count[x] >= k){
            ban.push(x);
        }
    }
    
    for(let b of ban){
        for(let i=0; i<id_list.length; i++){
            if(id[id_list[i]].includes(b)){
                answer[i]++;
            }
        }
    }
    
    return answer;
}