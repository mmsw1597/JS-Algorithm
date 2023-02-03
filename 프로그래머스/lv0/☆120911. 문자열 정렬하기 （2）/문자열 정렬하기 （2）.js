function solution(my_string) {
  let answer = "";
  let str = my_string.toLowerCase();
  answer = str.split("").sort().join("");
  return answer;
}

// 원본 배열이 바뀌느냐 안바뀌느냐를 알아야 오류없이 품
// 각 메서드가 정확히 무엇을 반환하는지 알아야함.
