function solution(fees, records) {
    let answer = [];
    const [basic, basicFee, unit, unitFee] = fees;
    const map = {};
    const res = new Map();
    const mTime = {};
    const mNumber = {};
    
    for(let x of records){
        const [time, number, type] = x.split(" ");
        
        if(type === "IN"){
            mNumber[number] = true;
            map[number] = time;
        }
        else{
            const start = map[number];
            const end = time;
            
            const s = start.split(":");
            const e = end.split(":");
            
            const sTime = +s[0] * 60 + +s[1];
            const eTime = +e[0] * 60 + +e[1];
            const total = eTime - sTime;
            
            if(mTime[number]) mTime[number] += total;
            else mTime[number] = total;
            delete map[number];
        }
    }
    for(let number of Object.keys(map)){
        const end = "23:59";
        const start = map[number];
        
        const s = start.split(":");
        const e = end.split(":");
            
        const sTime = +s[0] * 60 + +s[1];
        const eTime = +e[0] * 60 + +e[1];
        const total = eTime - sTime;
        
        if(mTime[number]) mTime[number] += total;
        else mTime[number] = total;
    }
    
    console.log(mTime);
    for(let number of Object.keys(mNumber)){
        const total = mTime[number];
        if(total <= basic){
            if(res.has(number)) res.set(number, res.get(number) + basicFee);
            else res.set(number, basicFee);
        }
        else{
            const cal = Math.ceil((total-basic) / unit) * unitFee;
            if(res.has(number)) res.set(number, res.get(number) + basicFee + cal);
            else res.set(number, basicFee + cal);
        }
    }
    const sorted = [...res].sort((a, b) => {
        return +a[0] - +b[0];
    })
    console.log(sorted);
    answer = sorted.map((v) => v[1]);
    return answer;
}