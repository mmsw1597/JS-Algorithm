function solution(today, terms, privacies) {
    const result = [];
    const types = {};
    const trans = (str) => {
        const [year, month, day] = str.split(".").map((v) => +v);
        
        return year * 28 * 12 + month * 28 + day;
    }
    today = trans(today);
    
    for(let x of terms){
        const [type, mm] = x.split(" ");
        types[type] = +mm * 28;
    }
    
    privacies.forEach((v, i) => {
        let [date, type] = v.split(" ");
        date = trans(date);
        date += types[type];
        if(date <= today)
            result.push(i + 1);
    })
    
    return result;
}