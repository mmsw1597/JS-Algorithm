function solution(wallpaper) {
    let answer = [];
    let arrx = [];
    let arry = [];
    let minx = 100;
    let miny = 100;
    let maxx = -1;
    let maxy = -1;
    
    for(let i = 0; i<wallpaper.length; i++){
        for(let j = 0; j<wallpaper[0].length; j++){
            if(wallpaper[i][j] === "#"){
                arrx.push(i);
                arry.push(j);
            }   
        }
    }
    
    console.log(arrx);
    console.log(arry);
    
    minx = Math.min(...arrx);
    miny = Math.min(...arry);
    maxx = Math.max(...arrx);
    maxy = Math.max(...arry);
    
    answer.push(minx);
    answer.push(miny);
    answer.push(maxx + 1);
    answer.push(maxy + 1);
    
    return answer;
}