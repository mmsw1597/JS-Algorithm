function solution(answers) {
    let answer = [];
    let count = [[0, 1], [0, 2] , [0, 3]];
    const one = [1,2,3,4,5];
    const two = [2, 1, 2, 3, 2, 4, 2, 5];
    const thr = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    answers.forEach((v, i) => {
        if(one[i%one.length] === v) count[0][0]++;
        if(two[i%two.length] === v) count[1][0]++;
        if(thr[i%thr.length] === v) count[2][0]++;
    })
    
    const max = Math.max(count[0][0], count[1][0], count[2][0]);
    
    answer = count.filter((v, i) =>{
        return v[0]===max;
    }).map((v) => v[1]).sort((a,b) => a-b);
    
    
    return answer;
}