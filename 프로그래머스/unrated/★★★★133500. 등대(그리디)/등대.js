function solution(n, lighthouse) {
  let answer = 0;
  // 한 뱃길의 양쪽 끝 등대 중 적어도 하나는 켜져있어야함
  // 가장 뱃길이 많은 등대를 끄는건 맞는거 같음
  const arr = Array.from({ length: n + 1 }, () => 0);
  const edge = Array.from({ length: n + 1 }, () => []);
  let sum = 0;
  const map = {};
  for (let [s, e] of lighthouse) {
    edge[s].push(e);
    edge[e].push(s);
    arr[s] += 1;
    arr[e] += 1;
    sum += 2;
  }

  function sub(idx) {
    let parentList = edge[idx];
    let parent = null;
    for (let x of parentList) {
      if (arr[x]) {
        parent = x;
        break;
      }
    }
    let ret = arr[parent];
    arr[parent] = 0;
    for (let x of edge[parent]) {
      if (arr[x] > 0) {
        arr[x] -= 1;
        ret += 1;
      }
    }
    return ret;
  }

  function add(idx) {
    let ret = 0;
    for (let x of edge[idx]) {
      arr[x] += 1;
      arr[idx] += 1;
      ret += 2;
    }
    return ret;
  }

  while (sum) {
    for (let i = 1; i <= n; i++) {
      if (arr[i] === 1) {
        sum -= sub(i);
        answer++;
        break;
      }
    }
  }

  return answer;
}

// 그리디 + 트리 문제
// 풀다가 머리 터져서 포기하고 풀이봤음
// 그냥 자식 노드가 1개인 노드를 등대로 쓰면 됨 (아니 근데 이걸 어떻게 증명하고 어떻게 확신하지 라고 생각했는데 사실 생각할만한거 같다)
// 진짜 간단히 생각해보면 리프노드는 그 리프노드의 부모노드가 무조건 등대여야만 한다. 그렇지않으면 밝혀줄 부모가 없다
// 리프노드 : 이웃한 노드가 단 하나인 노드, 부모노드 : 이웃한 노드가 적어도 하나 이상인 노드
// 계속해서 리프노드의 부모를 등대로 쓰다보면 새로운 리프노드가 생긴다.
// 그때마다 리프노드를 밝혀주면 결국 최소의 등대로 밝히게 된다. 즉, 정말 필요할때만 등대를 쓰게 되는 거다.
// 구조가 스패닝 트리라서 가능한 거는 인지하자
// 사실 트리는 안쓰고 풀었더니 실행시간이 처참함
// 다시 풀때 다른 사람 코드 참고해서 최적화나 해보자
// 뭔가 허무하다 그냥
