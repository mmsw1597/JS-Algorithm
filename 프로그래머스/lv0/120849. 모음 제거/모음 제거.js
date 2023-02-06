function solution(my_string) {
    let answer = '';
    let arr = my_string.split('');
    let no = ['a', 'e', 'i', 'o', 'u'];
    
    arr = arr.filter((v)=>{
        if(no.includes(v)) return false;
        else return true;
    })
   
    answer = arr.join('');
    
    return answer;
}