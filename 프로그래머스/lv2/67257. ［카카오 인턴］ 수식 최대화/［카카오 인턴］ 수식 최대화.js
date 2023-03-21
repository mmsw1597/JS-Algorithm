function solution(expression) {
    let answer = [];
    expression = expression.replace(/\-/g, "&");
    let op = [...new Set(expression.match(/[^0-9]/g))];
    const visit = Array.from({length : op.length}, () => false);
    const tmp = [];
    const ch = "*";
    console.log(op);
    
    function cal(arr, type){
        if(type === "*"){
            for(let x of arr){
                const parse = x.split("*");
            }
        }
    }
    
    function DFS(level){
        if(level === op.length){
            let copy = expression;           
            for(let x of tmp){
                if(x === "*"){
                    while(copy.match(/\-{0,1}\d+\*\-{0,1}\d+/g)){
                        copy = copy.replace(/\-{0,1}\d+\*\-{0,1}\d+/, match => {
                            const parse = match.split("*");
                            return parse[0] * parse[1];
                        });
                    }
                }else if(x === "+"){
                    while(copy.match(/\-{0,1}\d+\+\-{0,1}\d+/g)){
                        copy = copy.replace(/\-{0,1}\d+\+\-{0,1}\d+/, match => {
                            const parse = match.split("+");
                            return +parse[0] + +parse[1];
                        });
                    }
                }else{
                    while(copy.match(/\-{0,1}\d+\&\-{0,1}\d+/g)){
                        copy = copy.replace(/\-{0,1}\d+\&\-{0,1}\d+/, match => {
                            const parse = match.split("&");
                            return parse[0] - parse[1];
                        });
                    }
                }
            }
            answer.push(Math.abs(+copy));
        }    
        
        for(let i = 0; i<op.length; i++){
            if(!visit[i]){
                visit[i] = true;
                tmp.push(op[i]);
                DFS(level + 1);
                visit[i]=false;
                tmp.pop();
            }
        }
    }
    DFS(0);
    
    return Math.max(...answer);
}