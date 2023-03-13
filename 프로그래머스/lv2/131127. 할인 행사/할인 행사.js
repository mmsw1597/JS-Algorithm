function solution(want, number, discount) {
    let answer = 0;
    const map = new Map();
    let idx = 0;
    for(let key of want){
        map.set(key, idx++);
    }
    const target = number.join("");
    
    for(let i = 0; i<=discount.length - 10; i++){
        const arr = Array.from({length: number.length}, () => 0);
        
        for(let j = i; j<10 + i; j++){
            if(map.has(discount[j])){
                arr[map.get(discount[j])]++;
            }
        }
        if(target === arr.join(""))
            answer++;
    }
    
    return answer;
}