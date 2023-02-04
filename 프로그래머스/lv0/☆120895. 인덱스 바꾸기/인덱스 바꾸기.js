function solution(my_string, num1, num2) {
  let answer = my_string.split("");

  let tmp = answer[num1];
  answer[num1] = answer[num2];
  answer[num2] = tmp;

  answer = answer.join("");

  return answer;
}

// answer = my_string 으로 초기화하면 이상하게 안돌아감
// 왠지 추후에 알아내야겠음
