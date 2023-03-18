function solution(s) {
    let answer = 0;
    const str = s.split("");
    const map = {
        "}" : "{",
        "]" : "[",
        ")" : "("
    }
    
    function check(){
        const stack = [];
        const list = Object.keys(map);
        for(let x of str){
            if(!list.includes(x))
                stack.push(x);
            else if(stack.length && stack[stack.length - 1] === map[x]){
                stack.pop();
            }else{
                return false;
            }
        }
        return stack.length ? false : true;
    }
    
    for(let i = 0; i<s.length-1; i++){
        if(check()) answer++;
        str.push(str.shift());
    }
    
    
    return answer;
}