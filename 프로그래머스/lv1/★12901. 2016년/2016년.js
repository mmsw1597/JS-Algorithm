function solution(a, b) {
  let answer = "";
  const day = {
    0: "SUN",
    1: "MON",
    2: "TUE",
    3: "WED",
    4: "THU",
    5: "FRI",
    6: "SAT",
  };

  answer = day[new Date(`2016-${a}-${b}`).getDay()];

  return answer;
}

//Date 쓰는 법
