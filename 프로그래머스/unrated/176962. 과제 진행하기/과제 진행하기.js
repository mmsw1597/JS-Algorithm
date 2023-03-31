function solution(plans) {
    let answer = [];
    let stack = [];
    
    plans = plans.map((v) => {
        let [name, start, playtime] = v;
        
        start = start.split(":").reduce((acc ,v, i) => {
            if(i === 0)
                return acc + +v * 60;
            else
                return acc + +v;
        }, 0)
        
        return [name, +start, +playtime];
    });
    
    plans.sort((a, b) => {
        return a[1] - b[1];
    })
    
    let curTime = 0;
    let restTime = 0;
    let prevName = "";
    
    for(let [name, start, playtime] of plans){
        // 새로운 과제가 들어옴
        playtime = +playtime;
        // 기존에 진행 중이던 과제를 다 끝냈고 바로 새로운 과제가 들어온 경우
        if(prevName.length && curTime + restTime === start){
            answer.push(prevName);
        }
        // 기존에 진행 중이던 과제를 다 못끝냈는데 새로운 과제가 들어온 경우
        else if(curTime + restTime > start){
            stack.push([prevName, restTime - (start - curTime)]);
        }
        // 기존에 진행 중이던 과제를 다 끝내고 새로운 과제가 들어 왔는데 여유 시간이 있는 경우
        else if(prevName.length && curTime + restTime < start){
            answer.push(prevName);
            curTime = curTime + restTime;
            while(curTime < start && stack.length){
                let [sName, sTime] = stack.pop();
                if(curTime + sTime <= start){
                    answer.push(sName);
                    curTime = curTime + sTime;
                }else{
                    sTime = sTime - (start - curTime);
                    stack.push([sName, sTime]);
                    break;
                }
            }            
        }
        curTime = start;
        restTime = playtime;
        prevName = name;
    }
    console.log(answer);
    if(prevName.length) answer.push(prevName);
    curTime = curTime + restTime;
    while(stack.length){
        let [sName, sTime] = stack.pop();
        answer.push(sName);
        curTime = curTime + sTime;
    }
    
    return answer;
}