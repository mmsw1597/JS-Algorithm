function solution(book_time) {
  let answer = 1;
  const timeArr = [];
  const endArr = [];
  let curtime = -100;

  for (let [start, end] of book_time) {
    const [sh, sm] = start.split(":").map((v) => +v);
    const [eh, em] = end.split(":").map((v) => +v);
    timeArr.push([sh * 60 + sm, eh * 60 + em]);
  }

  timeArr.sort((a, b) => {
    return a[0] - b[0];
  });
  endArr.push(timeArr[0][1] + 10);
  timeArr.shift();

  for (let [start, end] of timeArr) {
    endArr.sort((a, b) => a - b);
    const idx = endArr.findIndex((v) => {
      return v <= start;
    });
    if (idx !== -1) {
      endArr.splice(idx, 1);
      endArr.push(end + 10);
    } else {
      answer++;
      endArr.push(end + 10);
    }
  }

  return answer;
}

//다소 어거지로 푼 문제긴 함
//정석적인 방법 2가지가 있는데 하나는 heap을 사용하는것. 단, js는 heap을 지원안하기 때문에 직접 만들어야함
//두번째는 시간축 상에 방을 쓰는 시간을 펼쳤을때 겹치는 부분의 최대 개수가 이 문제의 해답이됨
//실전에서 두번째 풀이는 생각해내기 어렵고 heap으로 푸는 것을 연습하자
