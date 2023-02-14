function solution(X, Y) {
  let answer = "";
  let common = [];
  let xcnt = Array.from({ length: 10 }, () => 0);
  let ycnt = Array.from({ length: 10 }, () => 0);

  for (let x of X) {
    xcnt[Number(x)]++;
  }

  for (let y of Y) {
    ycnt[Number(y)]++;
  }

  for (let i = 0; i < 10; i++) {
    common.push(Math.min(xcnt[i], ycnt[i]));
  }

  for (let i = 9; i >= 0; i--) {
    for (let j = 0; j < common[i]; j++) {
      answer += i;
    }
  }

  if (answer[0] === "0") answer = "0";
  else if (answer.length === 0) answer = "-1";

  return answer;
}

//아이디어가 중요한 문제
//X, Y 길이가 최대 3백만개라 단순 이중 for문으로는 불가능
