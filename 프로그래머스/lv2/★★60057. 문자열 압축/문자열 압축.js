function solution(s) {
  let answer = s.length;
  const len = Math.floor(s.length / 2);

  for (let i = 1; i <= len; i++) {
    let temp = "";
    let prev = "";
    let cur = "";
    let cnt = 1;

    for (let c of s) {
      if (prev.length !== i) prev += c;
      else if (cur.length !== i - 1) cur += c;
      else if (prev !== cur + c) {
        temp += (cnt === 1 ? "" : cnt) + prev;
        prev = cur + c;
        cur = "";
        cnt = 1;
      } else {
        cur = "";
        cnt++;
      }
    }
    if (cnt > 1) {
      if (cur.length) temp += cnt + prev + cur;
      else temp += cnt + prev;
    } else if (!cur.length) temp += prev;
    else temp += prev + cur;
    answer = Math.min(temp.length, answer);
  }

  return answer;
}

// 구현문제
// 반복문이 끝나고나서 후처리 과정이 힘들었음
