function solution(a, b, n) {
  let answer = 0;

  while (n >= a) {
    let div = Math.floor(n / a);
    let full = div * b;

    n -= div * a;
    n += full;
    answer += full;
  }
  return answer;
}

//펜을 꺼내세요
//n에서 full을 빼는게 아님
