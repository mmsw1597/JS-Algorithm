function solution(n, words) {
    let answer = [];
    let prev = "";
    let map = {};
    let cnt = 1;
    let round = 1;
    
    function isValid(prev, word){
        if(map[word]) return false;
        if(prev !== "" && word[0] !== prev) return false;
        if(word.length === 1) return false;
        
        return true;
    }
    let flag = false;
    
    for(let word of words){
        if(!isValid(prev, word)){
            flag = true;
            break;
        }
        map[word] = true;
        prev = word[word.length - 1];
        cnt = (cnt + 1) % (n + 1);
        if(!cnt) cnt = 1;
        if(cnt === 1) round++;
    }
    if(!flag) return [0, 0];
    
    return [cnt, round];
}