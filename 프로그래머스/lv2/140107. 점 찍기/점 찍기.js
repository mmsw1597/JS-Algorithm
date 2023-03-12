function solution(k, d) {
  let answer = 0;
  const rad = Math.floor(Math.sqrt(d ** 2 / k ** 2));

  for (let a = 0; a <= rad; a++) {
    const tmp = Math.floor(Math.sqrt(d ** 2 / k ** 2 - a ** 2));
    answer += tmp + 1;
  }

  return answer;
}
