function solution(dirs) {
    let answer = 0;
    const map = {};
    const d = {
        "U" : [1, 0],
        "L" : [0,-1],
        "D" : [-1, 0],
        "R" : [0, 1]
    };
    let y = 0;
    let x = 0;
    
    for(let com of dirs){
        const [dy, dx] = d[com];
        const ny = y + dy;
        const nx = x + dx;
        
        if(ny >= -5 && ny <= 5 && nx >= -5 && nx <= 5){
            if(!map[[y, x, ny, nx].join("")] && !map[[ny, nx, y, x].join("")]){
                map[[y, x, ny, nx].join("")] = true;
                map[[ny, nx, y, x].join("")] = true;
                answer++;
            }
            y = ny;
            x = nx;
        }else
            continue;
    }
    
    return answer;
}