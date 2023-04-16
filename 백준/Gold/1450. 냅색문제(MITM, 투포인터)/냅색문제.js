const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map((v) => +v));

const [n, c] = input.shift();
input[0].sort((a, b) => a - b);

const left = input[0].slice(0, Math.floor(n / 2));
const right = input[0].slice(Math.floor(n / 2));

const leftS = Array(0);
const rightS = Array(0);

const DFS = (idx, sum, arr, resArr) => {
  if (sum > c) {
    return;
  } else {
    resArr.push(sum);
  }

  for (let i = idx; i < arr.length; i += 1) {
    DFS(i + 1, sum + arr[i], arr, resArr);
  }
};

DFS(0, 0, left, leftS);
DFS(0, 0, right, rightS);

leftS.sort((a, b) => a - b);
rightS.sort((a, b) => b - a);

let lt = 0;
let rt = 0;
let answer = 0;

while (lt < leftS.length && rt < rightS.length) {
  const L = leftS[lt];
  const R = rightS[rt];

  if (L + R <= c) {
    lt += 1;
  } else {
    answer += lt;
    rt += 1;
  }
}

while (rt < rightS.length) {
  answer += lt;
  rt += 1;
}

console.log(answer);

// MITM은 Meet In The Middle의 약자로 완전탐색의 시간복잡도를 완화한 알고리즘이다.
// 현재 문제는 30개의 원소의 조합을 구해야하는 문제다. 따라서 완전탐색으로 2^30의 시간이 걸린다. 이는 불가능하고 비효율적이다.
// 여기서 30개의 원소를 오름차순으로 정렬하고 절반으로 나눈다. 이렇게 되면 나누어진 배열에서 모든 조합을 구하는 시간복잡도는 2 * 2^15이 된다.
// 2^16의 경우의 수는 1초내로 계산하기 거뜬하다. 이렇게 경우의 수를 구한다음 투포인터를 사용하여 문제의 해답을 구한다.
// 결국 MITM은 원소의 개수가 N일때 O(2^(N/2)) + a 의 시간복잡도를 가지며 a는 답을 구하기 위해 추가적인 연산을 의미한다.
// 정리하면 완전탐색의 시간복잡도를 약간의 테크닉으로 조금 감소시키는 알고리즘이다.

// 문제를 조금 설명하자면 left 배열은 N개 오름차순 배열을 절반으로 나눈 것중 왼쪽 원소들의 모든 부분집합의 합, right 배열은 오른쪽의 것들
// 결국 left 배열 중 하나랑 right 배열 중 하나를 고르고 그게 C보다 작으면 답의 후보다.
// 단순하게 완전탐색 left배열, right 배열 원소를 하나씩 고르는 걸로 구한다고 치면 최악의 경우 2^15 * 2^15가 되므로 MITM을 쓴게 의미가 없어진다.
// 여기서 투포인터를 쓴다. left 배열을 다시 오름차순으로 정렬, right 배열을 내림차 순으로 정렬한다.
// 만약 rt = 0에서 lt 포인터가 left 배열을 모두 순회했다면 모든 right 원소에 대하여 left 배열의 원소의 합이 C 이하라는 뜻이다. 따라서 이 경우 left.len * right.len 가 답이다.
// 반대로 모든 right 원소가 left[0]의 합이 C보다 크다면 단 한개도 답이 없다는 뜻이다.
// 그래서 left[lt] + right[rt] 가 C 이하라면 단순히 lt 값을 증가시키고
// C 초과라면 이때까지 통과했던 left 원소의 개수만큼 answer에 더해준다. 왜냐하면 right[rt + 1]은 right[rt]가 통과했던 left 원소를 통과하는 것은 자명하기 때문
// 끝나고 나서 rt가 right 길이보다 작다면 남은 right 원소들은 모든 left 원소에 대해 합이 C이하라는 뜻
// 따라서 O(2^(N/2)) + a에서 a 는 최악의 경우 O(2^(N/2))의 시간복잡도를 가지게 된다.
