function solution(elements) {
    let answer = 0;
    const len = elements.length;
    const set = new Set();
    elements = [...elements, ...elements];
    elements.pop();
    function DFS(max){
        for(let i = 0; i<len; i++){
            let cnt = 0;
            let sum = 0;
            while(cnt !== max){
                sum += elements[i + cnt];
                cnt++;
            }
            set.add(sum);
        }
    }
    
    for(let i = 1; i<=len; i++){
        DFS(i);
    }
    answer = [...set].length;
    
    return answer;
}