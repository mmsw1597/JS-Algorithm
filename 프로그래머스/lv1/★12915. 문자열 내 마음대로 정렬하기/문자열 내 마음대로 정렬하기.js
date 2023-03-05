function solution(strings, n) {
  let answer = [];

  answer = strings.sort((a, b) => {
    if (a[n] === b[n]) {
      return a > b ? 1 : a < b ? -1 : 0;
    }
    return a[n] > b[n] ? 1 : a[n] < b[n] ? -1 : 0;
  });

  console.log(strings);

  return answer;
}

//문자끼리의 산술 연산은 NaN이 나옴
//문자끼리 사전순으로 비교하려면 비교연산을 사용해야함
