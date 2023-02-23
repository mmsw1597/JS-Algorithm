function solution(s) {
  let answer = s;
  const number = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  number.forEach((v, i) => {
    const regex = new RegExp(`${v}`, "g");
    answer = answer.replace(regex, i);
  });

  return Number(answer);
}

//커스텀 정규표현식 만들기
//replace는 원본 문자열을 변환하지 않음에 주의
