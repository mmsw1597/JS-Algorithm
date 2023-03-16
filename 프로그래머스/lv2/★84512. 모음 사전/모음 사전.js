function solution(word) {
  let answer = 0;
  let dic = new Set();
  const alp = ["A", "E", "I", "O", "U"];
  const str = [];

  function DFS(N) {
    if (N === 5) {
      if (str.length) dic.add(str.slice().join(""));
      return;
    }
    for (let i = 0; i < 5; i++) {
      str.push(alp[i]);
      DFS(N + 1);
      str.pop();
      DFS(N + 1);
    }
  }

  DFS(0);
  dic = [...dic].sort();
  answer = dic.indexOf(word) + 1;

  return answer;
}

// DFS
// 문자열 사전 순으로 정렬하기
