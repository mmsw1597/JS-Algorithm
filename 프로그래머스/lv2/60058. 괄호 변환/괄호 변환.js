function solution(p) {
    let answer = '';  
    
    function balance(str){
        let close = 0;
        let open = 0;
        let u = "";
        let v = "";
        
        for(let x of str){
            if(x === "(")
                open++;
            else
                close++;
            u += x;
            if(open === close)
                break;
        }
        v = str.slice(u.length);
        return [u, v];
    }
    
    
    function isCorrect(str){
        const stack = [];
        for(let x of str){
            if(x === "(")
                stack.push(x);
            else
                stack.pop();
        }
        
        if(!stack.length) return true;
        else return false;
    }
    
    function exec(str){
        if(str === "") return "";
        
        let [u, v] = balance(str);
        if(isCorrect(u)) return u + exec(v);
        else{
            let tmp = "(";
            tmp += exec(v);
            tmp += ")";
            for(let i = 1; i<u.length-1; i++){
                if(u[i] === "(") tmp += ")";
                else tmp += "(";
            }
            return tmp;
        }
    }
    
    return exec(p);
}