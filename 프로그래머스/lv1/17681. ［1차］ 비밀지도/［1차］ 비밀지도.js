// 두 지도 중 어느 하나라도 벽이면 벽
// 모두 공백이면 공백
// 벽은 1 공백은 0

function solution(n, arr1, arr2) {
    let answer = [];
   
    for(let i = 0; i<n; i+=1){
        let parse1 = arr1[i].toString(2);
        let parse2 = arr2[i].toString(2);
        
        while(parse1.length < n) parse1 = "0" + parse1;
        while(parse2.length < n) parse2 = "0" + parse2;
        let res = "";
        for(let j = 0; j<n; j+=1){
            if(parse1[j] === "1" || parse2[j] === "1")
                res += "#";
            else 
                res += " ";
        }
        answer.push(res);
    }
    
    return answer;
}