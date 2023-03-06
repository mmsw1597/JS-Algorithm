function solution(numbers) {
  let answer = Array.from({ length: numbers.length }, () => -1);
  const stack = [];

  numbers.forEach((v, i) => {
    while (stack.length && stack[stack.length - 1][0] < v) {
      const [value, idx] = stack.pop();
      answer[idx] = v;
    }
    stack.push([v, i]);
  });

  return answer;
}

//시간초과에 유의
//단순 O(N^2) 알고리즘으론 안풀림
//스택을 활용
//스택의 윗층에 있는 숫자는 반드시 아래층 숫자보다 작음
//따라서 윗층에서 걸러졌다면 아래층 숫자들도 걸러지는 케이스임
