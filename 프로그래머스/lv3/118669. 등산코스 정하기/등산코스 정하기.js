class Node{
    constructor(w, i){
        this.weight = w;
        this.number = i;
    }
}

class MinHeap{
    constructor(){
        this.heap = [null];
    }
    
    size(){
        return this.heap.length <= 1 ? 0 : this.heap.length - 1;
    }
    
    heapify(n, i){
        let smallest = i;
        let l = i * 2;
        let r = i * 2 + 1;
        
        if(l <= n && this.heap[l].weight < this.heap[smallest].weight) smallest = l;
        if(r <= n && this.heap[r].weight < this.heap[smallest].weight) smallest = r;
        
        if(smallest !== i){
            this.swap(i, smallest);
            this.heapify(n, smallest);
        }
    }
    
    swap(a, b){
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }
    
    insert(x){
        this.heap.push(x);
        let i = this.heap.length - 1;
        let parent = Math.floor(i/ 2);
        
        while(i > 1 && this.heap[parent].weight > this.heap[i].weight){
            this.swap(parent, i);
            i=parent;
            parent = Math.floor(i/2);
        }
    }
    
    remove(){
        const ret = this.heap[1];
        
        if(this.heap.length <= 2) this.heap = [null];
        else {
            this.heap[1] = this.heap.pop();
            this.heapify(this.heap.length - 1, 1);
        }
        return ret;
    }
}



function solution(n, paths, gates, summits) {
    let answer = [];
    let gate = {};
    let summit = {};
    let route = Array.from({length : n + 1}, () => []);
    
    for(let num of gates){
        gate[num] = true;
    }
    
    for(let num of summits){
        summit[num] = true;
    }
    
    for(let [s, e, w] of paths){
        route[s].push([e, w]);
        route[e].push([s, w]);
    }
    let max = Infinity;
    let resIndex = Infinity;
    let cur = -1;
    let visit = {};
    const heap = new MinHeap();
    
    for(let start of gates){
        visit[start] = true;
        for(let [e, w] of route[start]){
            heap.insert(new Node(w, e));
        }
    }
    
    while(cur <= max && heap.size()){
        let node = heap.remove();
        cur = Math.max(cur, node.weight);
        
        while(node && summit[node.number]){
            if(max > cur){
                max = cur;
                resIndex = node.number;
            }else if(max === cur){
                resIndex = Math.min(resIndex, node.number);
            }
            node = heap.remove();
            if(node) cur = Math.max(cur, node.weight);
        }
        
        if(!node) break;
        
        if(!visit[node.number] && !summit[node.number] && !gate[node.number]){
            visit[node.number] = true;
            for(let [e, w] of route[node.number]){
                if(!gate[e] && w <= max)
                    heap.insert(new Node(w, e));
            }
        }
    }
    

    return [resIndex, max];
}