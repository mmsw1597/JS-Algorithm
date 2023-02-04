function solution(n) {
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    do {
      answer++;
    } while (answer % 3 === 0 || answer.toString().includes("3"));
  }

  return answer;
}

//반복문이 키포인트
