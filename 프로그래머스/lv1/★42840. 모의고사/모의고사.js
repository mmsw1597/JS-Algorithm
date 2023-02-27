function solution(answers) {
  let answer = [];
  let count = [
    [0, 1],
    [0, 2],
    [0, 3],
  ];
  const one = [1, 2, 3, 4, 5];
  const two = [2, 1, 2, 3, 2, 4, 2, 5];
  const thr = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  answers.forEach((v, i) => {
    if (one[i % one.length] === v) count[0][0]++;
    if (two[i % two.length] === v) count[1][0]++;
    if (thr[i % thr.length] === v) count[2][0]++;
  });

  const max = Math.max(count[0][0], count[1][0], count[2][0]);

  answer = count
    .filter((v, i) => {
      return v[0] === max;
    })
    .map((v) => v[1])
    .sort((a, b) => a - b);

  return answer;
}

//각 1, 2, 3번의 정답 수를 세는건 어렵지 않게 빨리 생각해냄
//문제는 가장 많이 푼 사람의 '번호'를 기억해야 하는데 번호를 어떻게 유지할지가 문제
//그냥 애초에 배열안에 배열을 넣어서 하는게 가장 무식하지만 빠르게 생각해낼 수 있는 방법
//아니면 어짜피 3명이니까 변수 3개에 각각 저장하는 것도 가능
//객체를 사용하거나 Map 객체를 사용해서 해쉬로 푸는것도 괜찮을듯
