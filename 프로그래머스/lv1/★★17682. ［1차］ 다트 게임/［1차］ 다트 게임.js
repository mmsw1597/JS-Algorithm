// 스타상은 해당 점수와 바로 전에 얻은 점수를 2배로
// 아차상은 해당 점수를 마이너스로
// 스타상 중첩 가능 아차상과도 중첩 가능


function solution(dartResult) {
    let answer = 0;
    const option = [];
    
    // 점수만 분리하도록 split 사용. 두 자릿수 정수도 있는 것에 주의
    const score = (dartResult.split(/[SDT*#]/g)).filter(v => v).map(v => +v);
  
    // SDT만 구분하도록 분리
    const bonus = (dartResult.replace(/[0-9*#]/g, ""));
    
    // 옵션이 붙어있는 점수의 인덱스를 따로 저장
    (dartResult.split(/[SDT]/g)).map((v, i) => {
        if(!v) return;
        
        if(v.includes("#")) option.push(["#", i - 1]);
        else if(v.includes("*")) option.push(["*", i - 1]);
    })
    
    let idx = 0;
    const result = score.slice();
    
    for(let i = 0; i<score.length; i+=1){
        const cur = result[i];
        if(bonus[i] === "D") result[i] = cur * cur;
        else if(bonus[i] === "T") result[i] = cur * cur * cur;
    }
    
    for(let [type, index] of option){
        if(type === "#") result[index] *= (-1);
        else if(type === "*"){
            if(index > 0) result[index - 1] *= 2;
            result[index] *= 2;
        }
    }
    
    return result.reduce((acc, v) => acc + v, 0);
}

//정규표현식을 잘 다뤄야 빨리 품
// ============================ 수정 ====================================

// 다시 풀어도 난해하기 그지 없다.
// split을 정규표현식으로 구분하는 법을 알아야 함
// 옵션은 맨마지막에 적용하는게 깔끔한거 같음
