function solution(players, callings) {
  let answer = [];
  let list = {};
  let prev = null;
  let head = players[0];
  let idx = 0;

  for (let name of players) {
    list[name] = [prev, players[idx + 1]];
    prev = name;
    idx += 1;
  }

  for (let name of callings) {
    const [front, back] = list[name];
    const ffront = list[front][0];

    if (ffront) list[ffront][1] = name;
    list[name] = [ffront, front];
    list[front] = [name, back];
    if (back) list[back][0] = front;

    if (head === front) {
      head = name;
    }
  }

  let tmp = head;
  while (tmp) {
    answer.push(tmp);
    tmp = list[tmp][1];
  }

  return answer;
}

// 양방향 연결리스트 또는 수학으로 해결가능
// 이 풀이는 연결리스트로 푼것은 아님
// 양방향을 풀었을때는 다소 속도가 느린거 같음
// 다음에 다시 풀땐 덧셈 뺄셈으로 한번 해보는 거랑 직접 양방향 연결리스트를 구현해보셈
