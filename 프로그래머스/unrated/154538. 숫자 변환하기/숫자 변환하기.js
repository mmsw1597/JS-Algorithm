function solution(x, y, n) {
    let answer = -1;
    const check = Array.from({length : y + 1}, () => false);
    let queue = [];
    let level = 0;
    queue.push(x);
    while(queue.length){
        const tmp = [];
        for(let num of queue){
            if(num === y) return level;
            
            if(num + n <= y && !check[num+n]){
                check[num+n] = true;
                tmp[tmp.length] = num + n;
            }
            if(num * 2 <= y && !check[num*2]){
                check[num*2] = true;
                tmp[tmp.length] = num * 2;
            }
            if(num * 3 <= y && !check[num*3]){
                check[num*3] = true;
                tmp[tmp.length] = num * 3;
            }
        }
        queue = tmp.slice();
        level++;
    }
    
    return answer;
}