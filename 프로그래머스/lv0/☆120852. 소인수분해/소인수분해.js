function solution(n) {
  let answer = [];
  let tmp = n;

  for (let i = 2; i <= Math.floor(n / 2); i++) {
    if (tmp % i === 0) {
      answer.push(i);
      tmp /= i;
      i--;
    }
  }

  if (!answer.length) answer.push(n);
  answer = [...new Set(answer)];

  return answer;
}

// set 객체 활용
