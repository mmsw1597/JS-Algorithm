function solution(sizes) {
    let W = 0;
    let H = 0;
    
    sizes.forEach((v, i) => {
        let [w, h] = v.sort((a,b) => b - a);
        W = Math.max(W, w);
        H = Math.max(H, h);
    })
    
    return W*H;
}