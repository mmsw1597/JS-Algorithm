function solution(info, query) {
  let answer = [];
  const map = {};

  function DFS(str, idx, num, tmp) {
    if (num === 4) {
      if (map[tmp]) map[tmp].push(+str[4]);
      else map[tmp] = [+str[4]];
      return;
    }

    for (let i = idx; i < 4; i++) {
      DFS(str, i + 1, num + 1, tmp + str[i]);
      DFS(str, i + 1, num + 1, tmp + "-");
    }
  }

  info.forEach((v, i) => {
    const str = v.split(" ");
    DFS(str, 0, 0, "");
  });

  for (let [key, value] of Object.entries(map)) {
    value.sort((a, b) => a - b);
  }

  query.forEach((v, i) => {
    const parse = v.replace(/ and /g, "");
    const [key, target] = parse.split(" ");

    if (!map[key]) answer.push(0);
    else {
      let lt = 0;
      let rt = map[key].length;
      let mid = -1;
      while (lt < rt) {
        mid = Math.floor((lt + rt) / 2);

        if (map[key][mid] >= +target) rt = mid;
        else lt = mid + 1;
      }
      answer.push(map[key].length - rt);
    }
  });

  return answer;
}

// 많이 어렵다
// 처음 문제에 접근할떄 일단 완전탐색을 고려하자.
// 어느 부분에서 오래걸리는지 알아야 한다.
// 어떤 값을 탐색할때 O(N)보다 시간을 더 단축시켜야 한다면 이진탐색을 적용하자
// lower bound, upper bound 구하는 법 알아두자
// 상한, 하한을 구할때는 rt는 arr.length - 1 이 아니라 arr.length 여야 한다.
