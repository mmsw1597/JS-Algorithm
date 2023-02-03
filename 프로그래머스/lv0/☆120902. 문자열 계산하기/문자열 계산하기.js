function solution(my_string) {
  let answer = 0;
  let str = my_string.split(" ");
  let op = str.filter((v) => v === "+" || v === "-");
  let sum = +str[0];
  let idx = 0;

  for (let i = 1; i < str.length; i++) {
    if (str[i] === "+" || str[i] === "-") continue;

    if (op[idx++] === "+") sum += +str[i];
    else sum -= +str[i];
  }

  answer = sum;

  return answer;
}

// js 문법 공부용으로 좋음
// 간단하게 문자를 숫자로 바꾸는 방법은 변수 앞에 '+'를 붙이면 됨.
