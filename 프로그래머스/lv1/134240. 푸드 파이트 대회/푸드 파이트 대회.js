function solution(food) {
    let answer = '';
    let left = [];
    let pointer = 0;

    for(let i = 1; i<food.length; i++){
        if((food[i] % 2) === 1)
            food[i] -= 1;
        
        for(let j = 0; j<food[i] / 2; j++){
            left.push(i);
        }
    }
    answer += left.join('');
    answer += '0';
    answer += left.reverse().join('');
    console.log(answer);
    
    return answer;
}