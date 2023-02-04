function solution(s) {
    let answer = '';
    let fstr = 'qwertyuiopasdfghjklzxcvbnm';
    
    for(let x of fstr){
        let idx = s.indexOf(x);
        if(idx !== -1){
            if(s.indexOf(x, idx+1) === -1) answer += x;
        }
    }
    
    answer = answer.split('').sort().join('');
    
    return answer;
}