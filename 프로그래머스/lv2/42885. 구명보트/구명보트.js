function solution(people, limit) {
    let answer = 0;
    const saved = Array.from({length : people.length}, () => false);
    people.sort((a, b) => a-b);
    let tmp = 0;
    let lt = 0;
    let rt = people.length - 1;
    let flag = false;
    
    while(lt < rt){
        if(!flag){
            if(tmp + people[lt] <= limit){
                tmp += people[lt];
                saved[lt] = true;
            }else{
                answer++;
                tmp = people[lt];
                saved[lt] = true;
            }
            lt++;
        }else{
            while(tmp + people[rt] > limit && lt < rt){
                rt--;
            }
            if(lt === rt)
                break;
            tmp += people[rt];
            saved[rt] = true;
            rt--;
        }
        flag = !flag;
    }
    
    for(let i = 0; i<people.length; i++){
        if(!saved[i]){
            if(tmp + people[i] <= limit){
                tmp += people[i];
            }else{
                answer++;
                tmp = people[i];
            }
        }
    }
    
    if(tmp) answer++;
    
    return answer;
}