function solution(sequence) {
  let answer = 0;
  const seq1 = sequence.map((v, i) => {
    if (i % 2 === 0) return v;
    else return v * -1;
  });

  const seq2 = sequence.map((v, i) => {
    if (i % 2 === 1) return v;
    else return v * -1;
  });

  const sum1 = Array.from({ length: sequence.length }, () => 0);
  const sum2 = Array.from({ length: sequence.length }, () => 0);

  seq1.forEach((v, i) => {
    if (i > 0) sum1[i] = v + sum1[i - 1];
    else sum1[i] = v;
  });

  seq2.forEach((v, i) => {
    if (i > 0) sum2[i] = v + sum2[i - 1];
    else sum2[i] = v;
  });

  let lt = 0;
  let rt = 1;
  let max1 = sum1[0];

  while (rt < sum1.length) {
    if (sum1[lt] < sum1[rt]) {
      max1 = Math.max(sum1[rt] - sum1[lt], max1, sum1[rt]);
      rt++;
    } else {
      lt = rt;
      max1 = Math.max(sum1[lt], max1);
      rt++;
    }
  }

  lt = 0;
  rt = 1;
  let max2 = sum2[0];

  while (rt < sum2.length) {
    if (sum2[lt] < sum2[rt]) {
      max2 = Math.max(sum2[rt] - sum2[lt], max2, sum2[rt]);
      rt++;
    } else {
      lt = rt;
      max2 = Math.max(sum2[lt], max2);
      rt++;
    }
  }

  answer = Math.max(max1, max2);

  return answer;
}

// Prefix Sum 문제
// 훨씬 간단한 코드 풀이가 있다.
// 결국 누적합을 구하고 누적합끼리의 차이가 가장 큰 것이 이 문제의 답이다.
// 그러려면 누적합 중 최대 최소의 차이가 답일텐데 여기서 1 5 10 -1 이 있다고 해보면 10 - (-1) 가 최대 최소의 차이이다.
// 위에서는 최대값의 위치가 최소값의 위치보다 앞이다. 그럼에도 불구하고 11이 답이다.
// 실제로 두 가지 펄스 수열을 곱해서 만들어진 누적합은 정확히 두 원소간 부호가 반대다.
// 따라서 단순히 절댓값의 차이가 가장 큰게 답이다. 이 사실을 알면 훨씬 코드가 간단해진다.
