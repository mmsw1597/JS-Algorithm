function solution(n, t, m, p) {
  let answer = "";
  let round = 0;
  let target = 0;
  p -= 1;

  while (answer.length < t) {
    let trans = target.toString(n);
    for (let x of trans) {
      if (round % m === p) answer += x.toUpperCase();
      if (answer.length === t) break;
      round++;
    }
    target++;
  }

  return answer;
}

// n진수 변환 메서드가 따로 있어서 쉽게 풀림
// 메서드를 안쓰고 푼다면 해당 수를 n으로 나누고 난 나머지를 이어 붙이면 된다.
