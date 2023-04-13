function solution(s, skip, index) {
    const charArr = Array(0);
    let tmp = "a".charCodeAt();
    let answer = "";
    
    while(tmp !== "z".charCodeAt() + 1){
        const char = String.fromCharCode(tmp);
        if(!skip.includes(char)){
            charArr.push(char);
        }
        tmp += 1;
    }
    
    for(let x of s){
        let idx = charArr.findIndex((v) => v === x);
        idx += index;
        answer += charArr[idx % charArr.length];
    }
    
    return answer;
}

//풀고나서 보니 왜 오래걸린지 모르겠음
//처음에 index만큼 반복문 도는걸로 하고 skip해야되면 i를 감소시켰었는데 이런 코드는 오히려 더 문제풀기 헷갈리게 만드는거 같음
//-------------------------수정---------------------------
// 조금 코드를 보기쉽게 바꿔보았다.
// skip을 제외한 알파벳들을 charArr 배열에 a 부터 z까지 순서대로 담는다.
// 이후 s를 순회하면서 각 알파벳의 인덱스를 얻고 그 인덱스에 그대로 index를 더해준다.
// 배열 길이를 넘어갈 경우 0으로 돌아가도록 나머지 연산을 써준다.
// 인덱스 탐색 시 선형탐색인게 좀 맘에 안드는데 해쉬를 썼어도 됐을거 같다.
