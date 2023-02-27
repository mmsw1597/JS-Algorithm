function solution(N, stages) {
  let answer = Array.from({ length: N + 1 }, (_, i) => i);
  const num_user = stages.length;
  const map = new Map();
  const fail = Array.from({ length: N + 1 }, (_, i) => [0, i]);

  function cal_user(target) {
    let sum = 0;

    for (let i = target; i <= N + 1; i++) {
      sum += map.get(i);
    }
    return sum;
  }

  for (let i = 1; i <= N + 1; i++) {
    map.set(i, 0);
  }

  for (let i = 0; i < num_user; i++) {
    map.set(stages[i], map.get(stages[i]) + 1);
  }

  for (let i = 1; i <= N; i++) {
    fail[i][0] = map.get(i) / cal_user(i);
  }
  fail.shift();
  fail.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    else return b[0] - a[0];
  });

  answer = fail.map((v) => v[1]);

  return answer;
}

// 어떤 배열의 인덱스와 값을 동시에 기억해야하는 거를 정렬할때 뇌정지가 많이 옴
// 당장 다른 방법이 떠오르지 않는다면 배열을 원소로 갖게끔 풀면 됨
// 한 가지 실수 한거는 맨 처음 map 객체를 0으로 초기화를 안하면 undefined가 되는데 특정 스테이지에 사람이 없는 경우도 있으니까 맨 처음에 0으로 초기화해야함
// 앞으로는 해쉬 쓸때 초기화를 염두에 두자
