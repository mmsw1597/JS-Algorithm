function solution(array) {
    let answer = 0;
    let hash = new Map();
    let arr = [];
    
    for(let x of array){
        if(hash.has(x)) hash.set(x, hash.get(x)+1);
        else hash.set(x, 1);
    }
    
    arr = [...hash];
    arr.sort((a,b)=>{
        return b[1] - a[1];
    })
    console.log(arr);
    if(arr.length === 1) return arr[0][0];
    if(arr[0][1] === arr[1][1]) return -1;
    else return arr[0][0];
    
    return answer;
}