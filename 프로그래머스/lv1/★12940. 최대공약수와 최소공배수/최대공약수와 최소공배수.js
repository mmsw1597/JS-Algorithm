function solution(n, m) {
  var answer = [];
  const max = Math.max(n, m);
  const min = Math.min(n, m);
  function GCD(a, b) {
    return a % b === 0 ? b : GCD(b, a % b);
  }
  const gcd = GCD(max, min);
  answer.push(gcd, (n * m) / gcd);

  return answer;
}

//GCD 함수는 그냥 외우다시피 하자
//주의 GCD(a, b)에서 a는 항상 b보다 크거나 같아야 함
