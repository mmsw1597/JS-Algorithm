function solution(m, musicinfos) {
    let answer = '';
    let list = [];
    let idx = 0;
    const map = {
        "C#" : "Q",
        "D#" : "W",
        "F#" : "Z",
        "G#" : "R",
        "A#" : "U"
    }
    
    function changeCode(str){
        const mArr = str.split("");
        const tmp = [];
        for(let i = 0; i<mArr.length; i++){
            if(mArr[i] === "#"){
                tmp[tmp.length - 1] = map[tmp[tmp.length - 1] + "#"];
            }else{
                tmp.push(mArr[i]);
            }
        }
        return tmp.join("");
    }
    
    const changeM = changeCode(m);
    
    for(let info of musicinfos){
        let [start, end, title, code] = info.split(",");
        
        const s = start.split(":").reduce((acc, v, i) => {
            if(i === 0)
                return acc + +v * 60;
            else
                return acc + +v;
        }, 0);
        const e = end.split(":").reduce((acc, v, i) => {
            if(i === 0)
                return acc + +v * 60;
            else
                return acc + +v;
        }, 0);
        
        let len = e - s;
        code = changeCode(code);
        let fullCode = "";
        for(let i = 0; i<len; i++){
            fullCode += code[i % code.length];
        }
        
        if(fullCode.includes(changeM)){
            list.push([title, len, idx]);
        }
        idx++;
    }
    
    if(!list.length) return "(None)";
    else if(list.length === 1) return list[0][0];
    else{
        list.sort((a, b) => {
            if(a[1] !== b[1]) return b[1]-a[1];
            else return a[2] - b[2];
        })   
    }
    
    return list[0][0];
}