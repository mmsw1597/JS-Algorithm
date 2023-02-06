function solution(dots) {
    let answer = 0;
    let [x,y] = dots[0];
    let width = 0;
    let height = 0;
    
    for(let i = 1; i<dots.length; i++){
        let nx = dots[i][0];
        let ny = dots[i][1];
        
        if(x === nx)
            height = (y-ny) < 0 ? ny-y : y - ny;
        if(y === ny)
            width = (x-nx) < 0 ? nx-x : x - nx;
    }
    
    answer = width * height;
    
    return answer;
}