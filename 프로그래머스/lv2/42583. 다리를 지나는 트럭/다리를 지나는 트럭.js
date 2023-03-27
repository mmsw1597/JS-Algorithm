class Queue{
    constructor(){
        this.storage = {};
        this.front = 0;
        this.rear = 0;
        this.size = 0;
    }
    
    head(){
        if(this.size === 0) return null;
        return this.storage[this.front];
    }
    
    add(value){
        this.storage[this.rear] = value;
        this.rear += 1;
        this.size += 1;
    }
    
    popleft(){
        let tmp;
        if(this.size === 0) return null;
        if(this.size === 1){
            tmp = this.storage[this.front];
            delete this.storage[this.front];
            this.front = 0;
            this.rear = 0;
        }else{
            tmp = this.storage[this.front];
            delete this.storage[this.front];
            this.front += 1;
        }
        this.size -= 1;
        return tmp;
    }
}


function solution(bridge_length, weight, truck_weights) {
    let answer = 0;
    let goStart = 0;
    let waitStart = 0;
    
    const going = new Queue();
    const wait = new Queue();
    const complete = [];
    
    let curW = 0;
    let curT = 0; 
    let curC = 0;
    
    for(let i = 0; i<truck_weights.length; i++){
        wait.add(truck_weights[i]);
    }
    
    while(complete.length < truck_weights.length){
        if(going.size === bridge_length){
            const truck = going.popleft();
            
            if(truck) {
                curC--;
                curW -= truck;
                complete.push(truck);
            }
        }
        
        if(curC < bridge_length){
            if(wait.size && curW + (wait.head() || 0) <= weight){
                const newTruck = (wait.popleft() || 0);
                going.add(newTruck);
                curW += newTruck;
                curC++;
            }else{
                going.add(0);
            }
        }else{
            going.add(0);
        }
        curT++;
    }
    return curT;
}