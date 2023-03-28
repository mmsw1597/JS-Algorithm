function solution(files) {
    let answer = [];
    
    function remake(str){
        let ret = "";
        let start = 0;
        let end = 0;
        
        while(isNaN(str[start]) || str[start] === " "){
            start++;
        }
        
        end = start + 1;
        
        while(!isNaN(str[end]) && str[end] !== " "){
            end++;
        }
        
        return [str.substring(0, start), str.substring(start, end), str.substring(end, str.length)];
    }
    
    files = files.map((v) => remake(v));
    files.sort((a, b) => {
        const [headA, numberA, tailA] = a;
        const [headB, numberB, tailB] = b;
        
        if(headA.toLowerCase() < headB.toLowerCase()) return -1;
        else if(headA.toLowerCase() > headB.toLowerCase()) return 1;
        
        return +numberA - +numberB;
    })
    
    answer = files.map((v) => {
        return v.join("");
    })
    
    return answer;
}