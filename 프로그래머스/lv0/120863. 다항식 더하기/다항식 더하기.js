function solution(polynomial) {
    let answer = '0';
    let arr = polynomial.split(' ');
    let x = 0;
    let lit = 0;
    
    for(let piece of arr){
        if(piece.includes('x')){
            let p = piece.replace(/x/, '');
            if(!p) x += 1;
            else x += Number(p);
        }else if(piece === '+') continue;
        else lit += Number(piece);
    }
    if(x && lit) answer = `${x === 1 ? '' : x}x + ${lit}`;
    else if(x) answer = `${x === 1 ? '' : x}x`;
    else if(lit)answer = `${lit}`;
    return answer;
}