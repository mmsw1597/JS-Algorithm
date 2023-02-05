function solution(sides) {
    let answer = 0;
    let sum = sides[0] + sides[1];
    let max = Math.max(...sides);
    let min = Math.min(...sides);
    let tmp = 1;
    //나머지 한변이 가장 길 경우
    answer += sum - max;
    
    //나머지 한변이 가장 긴게 아닌 경우
    //위에서 같은 경우는 세었으므로 등호는 빼준다.
    while(tmp < max){
        if(tmp + min > max) answer++;
        tmp++;
    }
    
    return answer;
}