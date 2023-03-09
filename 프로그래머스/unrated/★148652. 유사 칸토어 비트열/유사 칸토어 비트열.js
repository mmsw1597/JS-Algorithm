function solution(n, l, r) {
  let answer = 0;
  const zero = [];

  for (let i = 1; i <= n; i++) {
    const startZero = 5 ** (i - 1) * 2 + 1;
    const endZero = 5 ** (i - 1) * 3;
    zero.push([startZero, endZero]);
  }
  console.log(zero);
  function isZero(num) {
    let tmp = 5;
    for (let [s, e] of zero) {
      const d = num % tmp;
      if (d >= s && d <= e) return true;
      tmp *= 5;
    }
    return false;
  }
  for (let i = l; i <= r; i++) {
    if (!isZero(i)) answer++;
  }

  return answer;
}

// 수학 문제에 가까움
// 규칙을 찾아서 구현하면 됨
// 가장 이상적인 풀이는 5진수를 활용하는 것
