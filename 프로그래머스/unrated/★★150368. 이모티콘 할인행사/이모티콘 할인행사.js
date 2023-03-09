function solution(users, emoticons) {
  let answer = [-1, -1];
  const sales = [];

  function cal() {
    let money = 0;
    let join = 0;

    users.forEach((v, i) => {
      const [discount, max] = v;
      let sum = 0;

      for (let i = 0; i < emoticons.length; i++) {
        if (discount <= sales[i]) {
          sum += emoticons[i] * ((100 - sales[i]) / 100);
        }
      }
      if (sum >= max) join++;
      else money += sum;
    });

    return [join, money];
  }

  function DFS(idx) {
    if (sales.length === emoticons.length) {
      const [join, money] = cal();
      if (join > answer[0]) answer = [join, money];
      else if (join === answer[0]) {
        if (money > answer[1]) answer = [join, money];
      }
      return;
    }

    for (let i = idx; i < emoticons.length; i++) {
      for (let sale = 10; sale <= 40; sale += 10) {
        sales.push(sale);
        DFS(i + 1);
        sales.pop();
      }
    }
  }

  DFS(0);

  return answer;
}

// 완전 탐색 + 구현
// 이모티콘 개수 제한이 적어서 완전탐색으로 가능
