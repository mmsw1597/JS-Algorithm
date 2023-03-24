function solution(relation) {
  let answer = 0;
  let tmp = [];
  let ban = [];
  let one = {};

  function isUnique(cur) {
    const map = {};

    for (let x of relation) {
      let tt = "";
      for (let index of cur) {
        tt += x[index] + " ";
      }
      if (map[tt]) return false;
      else map[tt] = true;
    }

    return true;
  }

  function DFS(N, idx, M, cur) {
    if (N === M) {
      if (isUnique(cur)) {
        tmp.push(cur);
      }
      return;
    }

    for (let i = idx; i < relation[0].length; i++) {
      DFS(N + 1, i + 1, M, cur + i);
    }
  }

  for (let i = 1; i <= relation[0].length; i++) {
    DFS(0, 0, i, "");
  }
  let index = 0;

  function check(str) {
    for (let arr of ban) {
      let cnt = 0;
      for (let x of arr) {
        if (str.includes(x)) cnt++;
      }
      if (cnt === arr.length) return false;
    }
    return true;
  }

  for (let x of tmp) {
    if (check(x)) {
      ban.push(x);
      answer++;
    }
  }

  return answer;
}

// 유일성과 최소성을 동시에 하려다 더 꼬인듯함
// 입력 크기 값이 대놓고 너무 작음. 이런거는 무식하게 푸는게 대부분 답일 확률이 크다.
// 만약 02가 key고 02를 시작으로 하는것을 거르려고 하면 012를 못거른다.
// 일단 완전탐색으로 풀고 안되면 다른 방법을 찾아도 늦지 않다.
