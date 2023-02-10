function solution(today, terms, privacies) {
    let answer = [];
    let hash = new Map();
    let year = 0;
    let month = 0;
    let day = 0;
    let today_total = 0;
    
    today = today.split('.');
    year = Number(today[0]);
    month = Number(today[1]);
    day = Number(today[2]);
    
    today_total += year * 1000;
    today_total += month * 50;
    today_total += day;
    
    for(let x of terms){
        let parse = x.split(' ');
        hash.set(parse[0], Number(parse[1]));
    }
    
    let idx = 1;

    for(let x of privacies){
        let parse = x.split(' ');
        let day = parse[0].split('.');
        let ch = parse[1];
        let total = 0;
        
        let x_year = Number(day[0]);
        let x_month = Number(day[1]);
        let x_day = Number(day[2]);
        
        x_month += hash.get(ch);
        while (x_month > 12){
          x_month -= 12;
          x_year++;
        } 
            
        total += x_year * 1000;
        total += x_month * 50;
        total += x_day;
        console.log(x_year, x_month, x_day); 
        if(today_total >= total) answer.push(idx);
        idx++;
    }
    
    return answer;
}