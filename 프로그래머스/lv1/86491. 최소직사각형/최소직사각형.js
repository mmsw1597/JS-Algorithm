function solution(sizes) {
    let answer = Number.MAX_SAFE_INTEGER;
    let W = 0;
    let H = 0;
    
    for(let x of sizes){
        let width = x[0];
        let height = x[1];
             
        let case1 = Math.max(W, width) * Math.max(H, height);
        let case2 = Math.max(W, height) * Math.max(H, width);
            
        if(case1 >= case2){
            W = Math.max(W, height);
            H = Math.max(H, width);
        }else{
            W = Math.max(W, width);
            H = Math.max(H, height);
        }
    }
    
    let width = sizes[0][0];
    let height = sizes[0][1];
    
    let case1 = Math.max(W, width) * Math.max(H, height);
        let case2 = Math.max(W, height) * Math.max(H, width);
            
        if(case1 >= case2){
            W = Math.max(W, height);
            H = Math.max(H, width);
        }else{
            W = Math.max(W, width);
            H = Math.max(H, height);
        }
    
    
    return W*H;
}