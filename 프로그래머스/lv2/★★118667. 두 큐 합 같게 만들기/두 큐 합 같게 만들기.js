function solution(queue1, queue2) {
  let answer = -1;
  let sum1 = queue1.reduce((acc, v) => acc + v, 0);
  let sum2 = queue2.reduce((acc, v) => acc + v, 0);
  let cnt1 = 0;
  let cnt2 = 0;
  const len1 = queue1.length;
  const len2 = queue2.length;

  while (cnt1 <= len1 + len2 && cnt2 <= len1 + len2 && sum2 && sum1 !== sum2) {
    if (sum1 > sum2) {
      queue2.push(queue1[cnt1]);
      sum1 -= queue1[cnt1];
      sum2 += queue1[cnt1];
      cnt1++;
    } else {
      queue1.push(queue2[cnt2]);
      sum2 -= queue2[cnt2];
      sum1 += queue2[cnt2];
      cnt2++;
    }
  }
  if (sum1 === sum2) answer = cnt1 + cnt2;
  return answer;
}

// 반복문 종료 조건을 잘 생각해야함
// 조금만 더 빨리 풀자
