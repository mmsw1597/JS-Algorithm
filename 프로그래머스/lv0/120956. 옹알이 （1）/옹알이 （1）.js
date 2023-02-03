function solution(babbling) {
    let answer = 0;
    const pro = ["aya", "ye", "woo", "ma"];
    const ch = Array.from({length: 4}, () => 0);
    const tmp = [];
    const c = [];
    
    function DFS(L){
        if(L === pro.length){
            let str = tmp.join("");
            c.push(str);
            return;
        } 
        
        for(let i = 0; i<pro.length; i++){
            if(!ch[i]){
                ch[i] = 1;
                tmp.push(pro[i]);
                DFS(L+1);
                tmp.pop(pro[i]);
                ch[i] = 0;
                DFS(L+1);
            }
        }
    }
    DFS(0);
    for(let x of babbling){
        if(c.includes(x)) answer++;
    }
    return answer;
}