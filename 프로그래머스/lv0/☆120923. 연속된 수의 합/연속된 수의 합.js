function solution(num, total) {
  let answer = [];

  for (let i = -100; i <= 1000; i++) {
    let tmp = i;
    let sum = 0;
    let c = [];
    let flag = false;
    while (sum <= total) {
      c.push(tmp);
      sum += tmp++;

      if (sum === total && c.length === num) {
        answer = c.slice();
        flag = true;
        break;
      }
    }

    if (flag) break;
  }

  return answer;
}

// 실수에 유의할것
// 연속된 수가 0인 경우를 고려해야함.
