function solution(w, h) {
    let answer = 0;
    
    function cal(x){
        return Math.floor(-x * (h / w) + h);
    }
    
    for(let i = 1; i<=w; i++){
        answer += cal(i);
    }
    
    return answer * 2;
}