function solution(arrayA, arrayB) {
    let answer = 0;
    let minA = Number.MAX_SAFE_INTEGER;
    let minB = Number.MAX_SAFE_INTEGER;
    
    for(let a of arrayA){
        minA = Math.min(minA, a);
    }
    
    for(let b of arrayB){
        minB = Math.min(minB, b);
    }
    
    const A = [minA];
    const B = [minB];
    
    for(let i = Math.floor(Math.sqrt(minA)); i>=2; i--){
        if(minA % i === 0){
          A.push(minA/i);
          A.push(i);  
        } 
    }
    
    for(let i = Math.floor(Math.sqrt(minB)); i>=2; i--){
        if(minB % i === 0){
            B.push(minB/i);
            B.push(i);
        } 
    }
    
    for(let a of A){
        let flag = true;
        for(let largeA of arrayA){
            if(largeA % a !== 0){
                flag = false;
                break;
            }
        }
        
        if(!flag) continue;
        
        for(let b of arrayB){
            if(b % a === 0){
                flag = false;
                break;
            }
        }
        if(!flag) continue;
        answer = Math.max(answer, a);
    }
    
    for(let b of B){
        let flag = true;
        for(let largeB of arrayB){
            if(largeB % b !== 0){
                flag = false;
                break;
            }
        }
        
        if(!flag) continue;
        
        for(let a of arrayA){
            if(a % b === 0){
                flag = false;
                break;
            }
        }
        if(!flag) continue;
        answer = Math.max(answer, b);
    }
    
    return answer;
}