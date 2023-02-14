function solution(today, terms, privacies) {
  let answer = [];
  //Map 객체를 쓰긴 했는데 일반 객체로 잡고 대괄호 표기법으로 풀어도 상관은 없음
  //Map 객체를 쓰는거 까지는 인정할만함
  let hash = new Map();
  let year = 0;
  let month = 0;
  let day = 0;
  let today_total = 0;

  today = today.split(".");
  year = Number(today[0]);
  month = Number(today[1]);
  day = Number(today[2]);

  //달은 항상 28일까지 밖에 없다고 가정했음
  //모든 년도, 달을 '일'로 환산하면됨
  today_total += year * 1000; // 12 * 28
  today_total += month * 50; // * 28
  today_total += day;

  for (let x of terms) {
    let parse = x.split(" ");
    hash.set(parse[0], Number(parse[1]));
  }

  let idx = 1;

  for (let x of privacies) {
    let parse = x.split(" ");
    let day = parse[0].split(".");
    let ch = parse[1];
    let total = 0;

    let x_year = Number(day[0]);
    let x_month = Number(day[1]);
    let x_day = Number(day[2]);

    x_month += hash.get(ch);
    //내 머리로는 나머지 연산이 모든 경우에 대해서 예외가 없는지 모르겠음
    //나머지연산은 애매하면 걍 쓰지마셈
    //사실 이렇게 풀 필요도 없는거였네?
    while (x_month > 12) {
      x_month -= 12;
      x_year++;
    }

    //이렇게 푼건 좀 바보같긴함
    //가중치를 제대로 잡았다면 달이 12가 넘어갔을때 굳이 년도로 넘겨줄 필요가 없음.
    total += x_year * 1000;
    total += x_month * 50;
    total += x_day;
    console.log(x_year, x_month, x_day);
    //파기되는 날짜랑 같은것도 파기해야함 등호중요
    if (today_total >= total) answer.push(idx);
    idx++;
  }

  return answer;
}

//카카오 기출
//푸는데 너무 오래 걸렸음.
//개인적으로 코드를 작성하면서 생각하기 보다는 키보드에 손떼고 구상먼저 하는게 훨씬 시간 아끼는듯
//아래는 모범답안

/*
function solution(today, terms, privacies) {
  var answer = [];
  var [year, month, date] = today.split(".").map(Number);
  var todates = year * 12 * 28 + month * 28 + date;
  var t = {};
  terms.forEach((e) => {
    let [a, b] = e.split(" ");
    t[a] = Number(b);
  });
  privacies.forEach((e, i) => {
    var [day, term] = e.split(" ");
    day = day.split(".").map(Number);
    var dates = day[0] * 12 * 28 + day[1] * 28 + day[2] + t[term] * 28;
    if (dates <= todates) answer.push(i + 1);
  });
  return answer;
}
*/
