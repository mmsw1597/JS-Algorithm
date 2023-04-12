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

//카카오 기출
//푸는데 너무 오래 걸렸음.
//개인적으로 코드를 작성하면서 생각하기 보다는 키보드에 손떼고 구상먼저 하는게 훨씬 시간 아끼는듯
//아래는 모범답안

// -------수정-------------
// 짧고 간단한 코드로 수정해보았다.
