function solution(places) {
    let answer = [];
    const d = [[0,1], [0, -1], [1, 0], [-1, 0]];
    const ddd = [[1, 1], [1, -1], [-1, 1], [-1, -1]];
    const dd = [[0,2], [0, -2], [2, 0], [-2, 0]];
    let tmp = [];
    
    function check(y, x){
        for(let [dy, dx] of d){
            let ny = y + dy;
            let nx = x + dx;
            if(ny >= 0 && ny<5 && nx>=0 && nx<5){
                if(tmp[ny][nx] === "P")
                    return false;
            }
        }
        
        for(let [dy, dx] of ddd){
            let ny = y + dy;
            let nx = x + dx;
            if(ny >= 0 && ny<5 && nx>=0 && nx<5){
                if(tmp[ny][nx] === "P"){
                    if(tmp[y][nx] !== "X" || tmp[ny][x] !== "X")
                        return false;
                }
            }
        }
        
        for(let [dy, dx] of dd){
            let ny = y + dy;
            let nx = x + dx;
            dy /= 2;
            dx /= 2;
            
            if(ny >= 0 && ny<5 && nx>=0 && nx<5){
                if(tmp[ny][nx] === "P"){
                    if(tmp[y+dy][x+dx] !== "X")
                        return false;
                }
            }
        }
        return true;
    }
    
    for(let p of places){
        let flag = false;
         for(let i = 0; i<5; i++){
            for(let j = 0; j<5; j++){
                if(p[i][j] === "P"){
                    tmp = p;
                    if(!check(i, j)){
                        answer.push(0);
                        flag= true;
                        break;
                    }       
                }
            }
            if(flag) break;
        }
        if(!flag) answer.push(1);
    }
    
    return answer;
}