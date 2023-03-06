function solution(book_time) {
    let answer = 1;
    const timeArr = [];
    const endArr = [];
    let curtime = -100;
    
    for(let [start, end] of book_time){
        const [sh, sm] = start.split(":").map((v) => +v);
        const [eh, em] = end.split(":").map((v) => +v);        
        timeArr.push([sh * 60 + sm, eh * 60 + em]);
    }
    
    timeArr.sort((a, b) => {
        return a[0] - b[0];
    })
    endArr.push(timeArr[0][1] + 10);
    timeArr.shift();
    
    for(let [start, end] of timeArr){
        endArr.sort((a, b) => a-b);
        const idx = endArr.findIndex((v) => {
            return v <= start;
        })
        if(idx !== -1){
            endArr.splice(idx, 1);
            endArr.push(end + 10);
        }else{
            answer++;
            endArr.push(end+10);
        }
    }
    
    return answer;
}