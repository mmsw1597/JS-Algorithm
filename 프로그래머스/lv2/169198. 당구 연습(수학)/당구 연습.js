function solution(m, n, startX, startY, balls) {
  let answer = [];

  function cal(endX, endY) {
    const resA = (startX - endX) ** 2 + (startY - endY) ** 2;
    return resA;
  }

  for (let [endX, endY] of balls) {
    const queue = [];
    if (startX === endX) {
      if (startY > endY) queue.push(cal(endX, 2 * n - endY));
      else queue.push(cal(endX, -endY));
      queue.push(cal(2 * m - endX, endY));
      queue.push(cal(-endX, endY));
    } else if (endY === startY) {
      if (startX > endX) queue.push(cal(2 * m - endX, endY));
      else queue.push(cal(-endX, endY));
      queue.push(cal(endX, -endY));
      queue.push(cal(endX, 2 * n - endY));
    } else {
      queue.push(cal(-endX, endY));
      queue.push(cal(endX, -endY));
      queue.push(cal(endX, 2 * n - endY));
      queue.push(cal(2 * m - endX, endY));
    }

    answer.push(Math.min(...queue));
  }

  return answer;
}

// 수학적 지식이 필요한 문제
// 대칭을 이용하면 쉽게 풀리긴함
// 이런문제가 시험에 나올까 싶긴함.
