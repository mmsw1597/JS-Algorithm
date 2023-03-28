function solution(msg) {
    let answer = [];
    const dic = {};
    let cnt = 1;
    
    let ch1 = "A";
    while(ch1.charCodeAt() <= "Z".charCodeAt()){
        dic[ch1] = cnt++; 
        ch1 = String.fromCharCode(ch1.charCodeAt() + 1);
    }
    
    let idx = 0;
    let tmp = "";
    
    while(idx < msg.length){
        while(idx < msg.length && dic[tmp + msg[idx]]){
            tmp += msg[idx++];
        }
        
        answer.push(dic[tmp]);
        dic[tmp + msg[idx]] = cnt++;
        tmp = "";
    }
    
    
    return answer;
}