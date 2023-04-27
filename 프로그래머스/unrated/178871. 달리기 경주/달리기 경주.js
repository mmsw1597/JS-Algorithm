function solution(players, callings) {
    let answer = [];
    let list = {};
    let prev = null;
    let head = players[0];
    let idx = 0;
    
    for(let name of players){
        list[name] = [prev, players[idx + 1]];
        prev = name;
        idx += 1;
    }
    
    for(let name of callings){
        const [front, back] = list[name];
        const ffront = list[front][0];
        
        if(ffront)
            list[ffront][1] = name;
        list[name] = [ffront, front];
        list[front] = [name, back];
        if(back)
            list[back][0] = front;
        
        if(head === front){
            head = name;
        }
    }
    
    let tmp = head;
    while(tmp){
        answer.push(tmp);
        tmp = list[tmp][1];
    }
    
    return answer;
}