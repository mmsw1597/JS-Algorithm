function solution(s) {
    let answer = [0 ,0];
    let str = s;
    let count = 0;
    
    function eraseZero(){
        let cnt = 0;
        
        for(let x of str){
            if(x === "1") cnt++;
        }
        answer[1] += (str.length - cnt);    
        str = cnt.toString(2);
    }
    while(str !== "1"){
        answer[0]++;
        eraseZero();    
    }
    
    return answer;
}