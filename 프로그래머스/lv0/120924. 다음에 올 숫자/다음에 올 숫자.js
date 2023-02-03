function solution(common) {
    let answer = 0;
    let flag = false;
    let tmp;
    if(common[1] - common[0] === common[2] - common[1]){
        tmp = common[1]-common[0];
        flag = true;
    }else{
        tmp = common[1]/common[0];
    }
    
    if(flag) answer = common[common.length - 1] + tmp;
    else answer = common[common.length - 1] * tmp;
    
    return answer;
}