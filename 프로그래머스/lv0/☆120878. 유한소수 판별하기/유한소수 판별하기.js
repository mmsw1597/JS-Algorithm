function solution(a, b) {
  let answer = 1;
  let m = Math.max(a, b);

  for (let i = Math.floor(m / 2); i >= 2; i--) {
    if (a % i === 0 && b % i === 0) {
      a /= i;
      b /= i;
      i++;
    }
  }
  while (b % 2 === 0) b /= 2;
  while (b % 5 === 0) b /= 5;

  if (b === 1) answer = 1;
  else answer = 2;

  return answer;
}

//그냥 재밌는 문제같아서.. ㅋ
