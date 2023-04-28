function solution(strings, n) {
    strings.sort((a, b) => {
        if(a[n] === b[n])
            return a > b ? 1 : -1;
        
        return a[n].charCodeAt() - b[n].charCodeAt();
    })

    return strings;
}

//문자끼리의 산술 연산은 NaN이 나옴
//문자끼리 사전순으로 비교하려면 비교연산을 사용해야함

// 수정
// 문자열 전체를 사전 순 비교하려면 비교 연산을 사용하면 된다.
// sort 함수는 반환 값이 음수면 a를 우선, 양수면 b를 우선
