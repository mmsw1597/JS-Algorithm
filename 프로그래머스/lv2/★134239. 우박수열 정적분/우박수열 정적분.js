function solution(k, ranges) {
  let answer = [];
  const coord = [];
  const area = [];
  let len = 0;
  coord.push([0, k]);

  while (k > 1) {
    if (k % 2 === 0) k /= 2;
    else k = k * 3 + 1;
    len++;
    coord.push([len, k]);
  }

  for (let i = 0; i < len; i++) {
    const [a, b] = coord[i];
    const [c, d] = coord[i + 1];
    const r = (d - b) / (c - a);
    const beta = (r / 2) * (i + 1) ** 2 + b * (i + 1) - a * r * (i + 1);
    const alpha = (r / 2) * i ** 2 + b * i - a * r * i;
    area.push(beta - alpha);
  }
  for (let [start, end] of ranges) {
    end = len + end;
    if (start > end) answer.push(-1.0);
    else if (start === end) answer.push(0);
    else {
      let sum = 0;
      for (let i = start; i < end; i++) {
        sum += area[i];
      }
      answer.push(sum);
    }
  }

  return answer;
}

// 수학문제 코드로 구현
