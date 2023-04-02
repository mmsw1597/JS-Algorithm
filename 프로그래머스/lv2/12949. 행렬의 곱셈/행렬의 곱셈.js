function solution(arr1, arr2) {
    let answer = [];
    let newArr2 = [];
    
    for(let i = 0; i<arr2[0].length; i++){
        let tmp = [];
        for(let j =0; j<arr2.length; j++){
            tmp.push(arr2[j][i]);
        }
        newArr2.push(tmp);
    }
    
    for(let target of arr1){
        let tmp = [];
        for(let tool of newArr2){
            let res = target.reduce((acc, v, i) => {
                return acc + v * tool[i];
            }, 0);
            tmp.push(res);
        }
        answer.push(tmp);
    }
    
    
    return answer;
}