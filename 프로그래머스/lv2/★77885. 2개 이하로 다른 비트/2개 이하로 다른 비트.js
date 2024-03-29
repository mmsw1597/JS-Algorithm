function solution(numbers) {
  let answer = [];
  const bin = [];

  for (let x of numbers) {
    bin.push(0 + x.toString(2));
  }

  for (let b of bin) {
    let idx = 0;
    let idx2 = -1;
    let two = null;
    for (let i = b.length - 1; i >= 0; i--) {
      if (b[i] === "0") {
        idx = i;
        break;
      }
    }
    const one = parseInt(b, 2) + 2 ** (b.length - idx - 1);
    for (let i = idx + 1; i < b.length; i++) {
      if (b[i] === "1") {
        idx2 = i;
        break;
      }
    }
    if (idx2 !== -1) {
      two = one - 2 ** (b.length - idx2 - 1);
    }
    if (two) answer.push(Math.min(one, two));
    else answer.push(one);
  }

  return answer;
}

// 실제 자릿수와 코드 상에서의 자릿수의 인덱스 매칭을 헷갈리지 말것
// 실제 첫째 자릿수는 코드 상에서 끝 인덱스
