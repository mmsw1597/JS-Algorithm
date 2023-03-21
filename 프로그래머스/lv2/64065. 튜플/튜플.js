function solution(s) {
    let answer = [];
    const map = {};
    s = s.replace(/^\{|\}$/g, "");
    let parse = s.split(/\},/);
    const set = new Set();
    parse = parse.map((v) => v.replace(/\{|\}/g, "").split(",").map((v) => +v));
    parse.sort((a, b) => {
        return a.length - b.length;
    })
    
    parse = parse.flat();
    for(let x of parse){
        if(!map[x]){
            map[x] = true;
            answer.push(x);
        }
    }
    return answer;
}