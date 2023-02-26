function solution(numbers, hand) {
  let answer = "";
  let left = "*";
  let right = "#";
  hand = hand === "right" ? "R" : "L";
  const key = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    "*": [3, 0],
    0: [3, 1],
    "#": [3, 2],
  };

  function getDis(target, pos) {
    let [y, x] = pos;
    let [ny, nx] = key[target];

    return Math.abs(y - ny) + Math.abs(x - nx);
  }

  for (let n of numbers) {
    if (n === 1 || n === 4 || n === 7) {
      answer += "L";
      left = n;
    } else if (n === 3 || n === 6 || n === 9) {
      answer += "R";
      right = n;
    } else {
      const ldis = getDis(n, key[left]);
      const rdis = getDis(n, key[right]);
      if (ldis === rdis) {
        answer += hand;
        if (hand === "R") right = n;
        else left = n;
      } else if (ldis > rdis) {
        answer += "R";
        right = n;
      } else {
        answer += "L";
        left = n;
      }
    }
  }

  return answer;
}

//구현 문제
//처음엔 BFS로 해결했었는데 코드도 너무 길고 실행 시간도 오래걸렸음.
//이거보다 영역이 크고 고정된 배열이 아니라면 BFS로 푸는게 맞아보임
//배열이 작고 고정되어 있다면 간단하게 위와 같이 풀면 됨
