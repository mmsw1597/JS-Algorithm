function solution(numlist, n) {
  let answer = numlist.slice();

  answer.sort((a, b) => {
    let diffA = n - a < 0 ? (n - a) * -1 : n - a;
    let diffB = n - b < 0 ? (n - b) * -1 : n - b;

    if (diffA === diffB) return b - a;
    else return diffA - diffB;
  });

  return answer;
}

//sort 메서드 극한으로 사용하기
