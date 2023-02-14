function solution(survey, choices) {
  let answer = "";
  const map = new Map();

  map.set("R", 0);
  map.set("T", 0);
  map.set("C", 0);
  map.set("F", 0);
  map.set("J", 0);
  map.set("M", 0);
  map.set("A", 0);
  map.set("N", 0);

  for (let i = 0; i < survey.length; i++) {
    let score = choices[i] > 4 ? choices[i] % 4 : 4 - choices[i];
    let s = survey[i];

    if (choices[i] > 4) {
      map.set(s[1], map.get(s[1]) + score);
    } else {
      map.set(s[0], map.get(s[0]) + score);
    }
  }

  if (map.get("R") >= map.get("T")) answer += "R";
  else answer += "T";

  if (map.get("C") >= map.get("F")) answer += "C";
  else answer += "F";

  if (map.get("J") >= map.get("M")) answer += "J";
  else answer += "M";

  if (map.get("A") >= map.get("N")) answer += "A";
  else answer += "N";

  return answer;
}

//구현문제
//아마 카카오 코테 문제 중 가장 쉬운 첫번째 문제일것으로 예상 이런 문제는 얼마나 빨리 푸느냐가 관건
//해쉬를 잘 써야함
//좀더 나은 풀이는 성격 지표를 배열 상수로 선언하고 for each문으로 map을 초기화 했으면 좋았을듯
