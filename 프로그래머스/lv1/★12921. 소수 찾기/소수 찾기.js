function solution(n) {
  let answer = 0;
  let primeArr = Array.from({ length: n + 1 }, () => true);

  for (let i = 2; i * i <= n; i++) {
    if (primeArr[i]) {
      for (let j = i * i; j <= n; j += i) primeArr[j] = false;
    }
  }

  for (let i = 2; i <= n; i++) {
    if (primeArr[i]) answer++;
  }

  return answer;
}

//에라토스테네스의 체 활용 (단순하게 풀면 시간초과)
