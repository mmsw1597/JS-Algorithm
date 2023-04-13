function solution(answers) {
    let answer = [];
    let count = {
        1 : 0,
        2 : 0,
        3 : 0,
    }
    const one = [1, 2, 3, 4, 5];
    const two = [2, 1, 2, 3, 2, 4, 2, 5];
    const thr = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    answers.forEach((v, i) => {
        if(one[i%one.length] === v) count[1] += 1;
        if(two[i%two.length] === v) count[2] += 1;
        if(thr[i%thr.length] === v) count[3] += 1;
    })
    
    const sorted = Object.entries(count).sort((a, b) => {
        if(a[1] === b[1]) return a[0] - b[0];
        else return b[1] - a[1];
    });
    const max = sorted[0][1];
    const arr = sorted.filter((v) => v[1] === max).map((v) => +v[0]);
    return arr;
}

//각 1, 2, 3번의 정답 수를 세는건 어렵지 않게 빨리 생각해냄
//문제는 가장 많이 푼 사람의 '번호'를 기억해야 하는데 번호를 어떻게 유지할지가 문제
//그냥 애초에 배열안에 배열을 넣어서 하는게 가장 무식하지만 빠르게 생각해낼 수 있는 방법
//아니면 어짜피 3명이니까 변수 3개에 각각 저장하는 것도 가능
//객체를 사용하거나 Map 객체를 사용해서 해쉬로 푸는것도 괜찮을듯

// -------------------수정--------------------
// 배열안에 배열말고 해쉬를 써서 구현해보았다.
