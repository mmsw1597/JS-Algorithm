// 두 지도 중 어느 하나라도 벽이면 벽
// 모두 공백이면 공백
// 벽은 1 공백은 0

function solution(n, arr1, arr2) {
    let answer = [];
    for(let i = 0; i<n; i++){
        let binary1 = arr1[i].toString(2);
        let binary2 = arr2[i].toString(2);
        
        while(binary1.length < n){
            binary1 = "0" + binary1; 
        }
        
        while(binary2.length < n){
            binary2 = "0" + binary2;
        }
        
        let result = "";
        
        for(let j = 0; j<n; j++){
            result += (binary1[j] === "1" || binary2[j] === "1") ? "#" : " ";    
        }
        
        answer.push(result);
    }
    
    return answer;
}