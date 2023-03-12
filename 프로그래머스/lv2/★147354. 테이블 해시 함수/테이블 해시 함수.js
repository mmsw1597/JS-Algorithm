function solution(data, col, row_begin, row_end) {
  let answer = 0;
  const s = [];

  data.sort((a, b) => {
    if (a[col - 1] === b[col - 1]) {
      return b[0] - a[0];
    } else {
      return a[col - 1] - b[col - 1];
    }
  });

  console.log(data);

  data.forEach((v, i) => {
    const idx = i + 1;

    const res = v.reduce((acc, v) => {
      return acc + (v % idx);
    }, 0);

    s.push(res);
  });

  for (let i = row_begin - 1; i < row_end; i++) answer ^= s[i];

  return answer;
}

// 걍 JS 문법 다루기 문제
// XOR 연산에만 주의
