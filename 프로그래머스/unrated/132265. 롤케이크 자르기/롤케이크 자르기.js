function solution(topping) {
    let answer = 0;
    let left = {};
    let right = {};
    let l = 0;
    let r = 0;
    
    for(let x of topping){
        right[x] = right[x] + 1 || 1;
    }
    r = Object.keys(right).length;
    
    for(let x of topping){
        if(!left[x]){
            left[x] = true;
            l++;
        }
        if(right[x] === 1){
            r--;
        }else{
            right[x]--;
        }
        if(l === r)
            answer++;
    }

    return answer;
}