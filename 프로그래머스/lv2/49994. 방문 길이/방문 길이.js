function solution(dirs) {
    let answer = 0;
    
    const direction = {
        U : [1, 0],
        D : [-1, 0],
        R : [0, 1],
        L : [0, -1]
    }
    
    const memory = {};
    let [y, x] = [0, 0];
    
    for(const key of dirs){
        const [dy, dx] = direction[key];
        const [ny, nx] = [y + dy, x + dx];
        
        if(ny < -5 || ny > 5 || nx < -5 || nx > 5){
            continue;
        }
        
        const memoryKey1 = [y, x, ny, nx].join(" ");
        const memoryKey2 = [ny, nx, y, x].join(" ");
            
        if(!memory[memoryKey1] && !memory[memoryKey2]){
            answer++;
            memory[memoryKey1] = true;
            memory[memoryKey2] = true;
        }
        
        [y, x] = [ny, nx];
    }
    return answer;
}