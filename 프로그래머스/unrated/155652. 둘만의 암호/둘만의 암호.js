function solution(s, skip, index) {
    let answer = s;
    let arr = [];
    let arr1 = [];
    
    // for(let i = 97; i<=122; i++){
    //     console.log(String.fromCharCode(i));    
    // }
    
    for(let x of s){
        arr.push(x.charCodeAt());
    }
    for(let x of arr){
        let jump = 0;
        let tmp = x;
        while(jump !== index){
            tmp++;
            if(tmp > 122) tmp = (tmp % 123) + 97
            if(!skip.includes(String.fromCharCode(tmp)))
                jump++;
        }
        arr1.push(String.fromCharCode(tmp));
    }
    
    answer = arr1.join('');
    
    return answer;
}