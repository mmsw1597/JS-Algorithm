const fs = require("fs");
const input =  fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = +input[0];
const arr = input[1].split(" ").map((v) => +v);
const dp = Array.from({length : n}, () => 1);
const list = [];

let answer = 1;
let prev = 0;
function findLowerBound(target){
  let lt = 0;
  let rt = list.length - 1;
  let mid = null;
  let ret = null;

  while(lt <= rt){
    mid = Math.floor((lt + rt) / 2);
    if(list[mid] >= target){
      rt = mid - 1;
      ret = mid;
    }else{
      lt = mid + 1;
    }
  }

  return ret;
}

for(let i = 0; i < n; i++){
  if(!list.length) list.push(arr[i]);
  else if(list[list.length - 1] < arr[i]) {
    list.push(arr[i]);
    dp[i] = list.length;
  }
  else{
    let index = findLowerBound(arr[i]);
    list[index] = arr[i];
    dp[i] = index + 1;
  }

  if(answer < dp[i]){
    prev = i;
    answer = dp[i];
  }
}

const result = [arr[prev]];

for(let i = prev - 1; i>=0; i--){
  if(arr[i] < arr[prev] && dp[prev] === dp[i] + 1){
    result.push(arr[i]);
    prev = i;
  }
}

console.log(answer);
console.log(result.reverse().join(" "));

// 문제 풀다가 못풀겠어서 풀이봤는데 풀이보고 해당문제를 괜히 시도했다고 생각했다.
// 풀이 방법이 좀 난해하다. 도저히 내 머리속에서 나올 수 없는 풀이같다.

// LIS를 O(NlogN) 으로 풀어야 하는 문제
// 기존에는 O(N)으로 배열을 순회하면서 O(N)으로 그 다음 수로 올 수 있는 수를 찾는 방법으로 O(N^2)가 걸렸다면..
// 이번에는 순회는 똑같이 O(N)으로 하되 탐색을 O(logN)으로 해야한다.
// O(logN)탐색은 이분탐색 말곤 없다고 봐도 무방하다. (내 수준에서는)

// 현재 i 원소가 마지막 원소인 LIS를 찾는다면
// i 이전의 원소에서 dp 값은 가장 크고 arr[i]보다 작은 수 다음에 arr[i]를 붙이면 LIS가 된다.
// 여기서 빈 배열 list의 도움을 받아 조금 더 쉽게 구현이 가능하다.

// arr를 순회하다가 일단 list가 비어있으면 그냥 list에 push 한다. ---- 1
// 만약 arr[i]가 list의 맨 마지막 원소보다 크다면 arr[i]를 list에 push한다. ---- 2
// 위의 두 경우가 모두 아니라면 list에서 Lower Bound를 찾고 그것과 arr[i]를 교체한다. ---- 3

// 1번 같은 경우는 자명하므로 패스
// 2번 같은 경우는 list는 항상 오름차순으로 정렬되어 있고 마지막 원소보다 크다면 그냥 그대로 LIS의 마지막 원소가 될 자격이 있다는 것이므로 push 하는 것
// 3번 같은 경우는 list가 [8, 9, 11]일때 10원소가 온다면 10의 하한인 11과 교체를 하는데 이유는
// [8, 9, 11]보다 [8, 9, 10]이 더 길어질 가능성이 높기 때문이다.

// 주의할 점은 list내의 원소는 LIS의 원소가 아니며
// 단지 list의 길이는 LIS의 길이와 같다.
// 또한 list에 push하는 경우 dp값은 list의 길이가 되며
// 하한과 교체하는 경우는 그 하한의 index가 dp가 된다.




