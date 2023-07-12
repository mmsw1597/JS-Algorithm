function solution(park, routes) {
    const answer = [];
    let curY = 0;
    let curX = 0;
    const H = park.length;
    const W = park[0].length;
    
    const direction = {
        E : [0, 1],
        W : [0, -1],
        S : [1, 0],
        N : [-1, 0]
    };
    const route = routes.map(v => v.split(" "));
    
    for(let i = 0; i < H; i++){
        for(let j = 0; j < W; j++){
            if(park[i][j] === "S"){
                curY = i;
                curX = j;
            }
        }
    }
    
    for(let [dir, dis] of route){
        const [dy, dx] = direction[dir];
        let [ty, tx] = [curY, curX];
        let [ny, nx] = [curY + dy , curX + dx];
        dis = +dis;
        
        while(dis && ny >= 0 && ny < H && nx >= 0 && nx < W && park[ny][nx] !== "X"){
            [ty, tx] = [ny, nx];
            [ny, nx] = [ty + dy, tx + dx];
            dis--;
        }
        if(dis === 0){
            [curY, curX] = [ty, tx];
        }
    }
    
    return [curY, curX];
}