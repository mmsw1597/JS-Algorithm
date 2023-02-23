function solution(cards1, cards2, goal) {
  let answer = "No";

  let p1 = 0;
  let p2 = 0;
  let p = 0;
  while ((p1 < cards1.length || p2 < cards2.length) && p < goal.length) {
    if (goal[p] === cards1[p1]) {
      p++;
      p1++;
      continue;
    }

    if (goal[p] === cards2[p2]) {
      p++;
      p2++;
      continue;
    }

    break;
  }
  console.log(p);
  if (p === goal.length) answer = "Yes";

  return answer;
}

//투포인터 문제
//시도는 안했지만 indexOf 메서드를 이용해도 풀릴거 같긴 한데 문제에서 cards나 goal에 중복 원소가 없다는 가정이 없어서 후처리가 좀 더 필요할 듯
