function solution(id_pw, db) {
    let answer = 'fail';
    
    for(let [id, pw] of db){
        if(id === id_pw[0]){
            if(pw !== id_pw[1]) return "wrong pw";
            else return "login";
        }
    }
    return answer;
}