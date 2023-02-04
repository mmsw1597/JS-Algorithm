function solution(bin1, bin2) {
  let answer = "";
  let b1 = 0;
  let b2 = 0;
  let b3 = 0;
  let tmp = 1;

  for (let i = bin1.length - 1; i >= 0; i--) {
    if (bin1[i] === "1") b1 += tmp;
    tmp *= 2;
  }

  tmp = 1;

  for (let i = bin2.length - 1; i >= 0; i--) {
    if (bin2[i] === "1") b2 += tmp;
    tmp *= 2;
  }

  b3 = b1 + b2;
  if (b3 === 0) answer += "0";
  while (b3) {
    if (b3 % 2 === 0) answer += "0";
    else answer += "1";

    b3 = Math.floor(b3 / 2);
  }

  return answer.split("").reverse().join("");
}

// 구현 문제에 가까움
