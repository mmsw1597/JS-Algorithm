function solution(polynomial) {
  let answer = "0";
  let arr = polynomial.split(" ");
  let x = 0;
  let lit = 0;

  for (let piece of arr) {
    if (piece.includes("x")) {
      let p = piece.replace(/x/, "");
      if (!p) x += 1;
      else x += Number(p);
    } else if (piece === "+") continue;
    else lit += Number(piece);
  }
  if (x && lit) answer = `${x === 1 ? "" : x}x + ${lit}`;
  else if (x) answer = `${x === 1 ? "" : x}x`;
  else if (lit) answer = `${lit}`;
  return answer;
}

// 실수에 주의
// 문제 설명이 빈약한 부분 -> x 계수도 0이고 상수항 계수도 0이면 0으로 나타내야함
// 나머지 하나 실수는 일부러 안적음.. 문제를 제대로 읽으면 됨
