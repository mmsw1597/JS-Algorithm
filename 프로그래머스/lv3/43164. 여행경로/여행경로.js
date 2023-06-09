class Queue{
    constructor(){
        this.queue = [];
        this.front = 0;
        this.rear = 0;
    }
    
    enqueue(v){
        this.queue[this.rear++] = v;
    }
    
    dequeue(){
        const ret = this.queue[this.front++];
        return ret;
    }
    
    isEmpty(){
        return (this.front === this.rear);
    }
    
    size(){
        return this.rear - this.front;
    }
}


function solution(tickets) {
    let list = [];
    const hash = {};
    const n = tickets.length;
    
    for(let [s, e] of tickets){
        if(!hash[s]) {
            hash[s] = new Queue();
            hash[s].enqueue(e);
        }
        else hash[s].enqueue(e);
    }
    
    const DFS = (level, start, tmp) => {
        if(level === n){
            list.push(tmp.join(""));
        }
        
        if(hash[start]){
            for(let i = 0; i<hash[start].size(); i+=1){
                const dest = hash[start].dequeue();
                tmp.push(dest);
                DFS(level + 1, dest, tmp);
                hash[start].enqueue(dest);
                tmp.pop();
            }
        }
    }
    
    DFS(0, "ICN", ["ICN"]);
    const answer = [];
    let tmp = "";
    list.sort()[0].split("").forEach((v) => {
        tmp += v;
        if(tmp.length === 3) {
            answer.push(tmp);
            tmp = "";
        }
    }) ;
    
    return answer;
}