function solution(orders, course) {
  let answer = [];
  let map = {};
  let tmp = [];
  let set;

  function DFS(order, cur, max, idx) {
    if (cur === max) {
      //여기 주의
      let ttmp = tmp.slice();
      set.add(ttmp.sort().join(""));
      return;
    }

    for (let i = idx; i < order.length; i++) {
      tmp.push(order[i]);
      DFS(order, cur + 1, max, i + 1);
      tmp.pop();
    }
  }
  let max = 0;
  for (let c of course) {
    map = {};
    max = 0;
    for (let order of orders) {
      set = new Set();
      tmp = [];
      DFS(order, 0, c, 0);
      for (let s of [...set]) {
        map[s] = map[s] ? map[s] + 1 : 1;
        if (map[s] > max) max = map[s];
      }
    }
    for (let [k, v] of Object.entries(map)) {
      if (max === v && max > 1) {
        answer.push(k);
      }
    }
  }

  return answer.sort();
}

// 굉장히 난해했던 문제.
// set을 쓸 필요가 없다. order에는 중복 원소가 없으니 조합 탐색 알고리즘상 중복이 나올 수 가 없다.
// DFS에서 임시 배열을 정렬해야할 경우 조심해야함. 나중에 가장 마지막에 들어갔던거를 꺼내야하는데 정렬로 인해 순서가 바뀌면 흐트러짐
