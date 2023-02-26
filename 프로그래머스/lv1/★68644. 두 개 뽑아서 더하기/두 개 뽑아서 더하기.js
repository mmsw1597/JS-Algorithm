function solution(numbers) {
  let answer = new Set();
  let tmp = [];

  function DFS(n, index) {
    if (n === 2) {
      answer.add(tmp[0] + tmp[1]);
      return;
    }

    for (let i = index; i < numbers.length; i++) {
      tmp.push(numbers[i]);
      DFS(n + 1, i + 1);
      tmp.pop();
    }
  }

  DFS(0, 0);
  return [...answer].sort((a, b) => a - b);
}

//조합 구하기
//DFS로 구현할때 자주 실수하는게 있는데 위 코드에서 재귀 호출할때 두번째 인자를 index+1이 아니라 반복문의 i+1로 해야함
