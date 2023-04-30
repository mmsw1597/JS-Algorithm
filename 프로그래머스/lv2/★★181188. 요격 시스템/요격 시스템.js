function solution(targets) {
  let answer = 1;

  targets.sort((a, b) => {
    if (a[0] === b[0]) {
      return b[1] - b[0] - (a[1] - a[0]);
    }
    return a[0] - b[0];
  });

  let [start, end] = targets[0];

  for (let [s, e] of targets) {
    if (s < end) {
      end = Math.min(e, end);
    } else {
      answer += 1;
      end = e;
    }
  }

  return answer;
}

// 그리디 문제
// 각 좌표의 start 지점을 기준으로 오름차 순으로 정렬 (start 지점이 서로 같은 경우 어느 순서로 놔도 상관 없음)
// targets를 순회하면서 end 지점을 e와 end 중 더 작은 것으로 갱신한다. 이때 만나는 좌표의 s가 end보다 작으면 하나의 미사일로 동시에 요격 가능
// 동시 요격 불가능인 경우 미사일을 추가로 쏴야하므로 미사일 개수 증가, 및 end를 e로 갱신
