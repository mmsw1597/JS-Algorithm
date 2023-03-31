function solution(plans) {
  let answer = [];
  let stack = [];

  plans = plans.map((v) => {
    let [name, start, playtime] = v;

    start = start.split(":").reduce((acc, v, i) => {
      if (i === 0) return acc + +v * 60;
      else return acc + +v;
    }, 0);

    return [name, +start, +playtime];
  });

  plans.sort((a, b) => {
    return a[1] - b[1];
  });

  let curTime = 0;
  let restTime = 0;
  let prevName = "";

  for (let [name, start, playtime] of plans) {
    // 새로운 과제가 들어옴
    playtime = +playtime;
    // 기존에 진행 중이던 과제를 다 끝냈고 바로 새로운 과제가 들어온 경우
    if (prevName.length && curTime + restTime === start) {
      answer.push(prevName);
    }
    // 기존에 진행 중이던 과제를 다 못끝냈는데 새로운 과제가 들어온 경우
    else if (curTime + restTime > start) {
      stack.push([prevName, restTime - (start - curTime)]);
    }
    // 기존에 진행 중이던 과제를 다 끝내고 새로운 과제가 들어 왔는데 여유 시간이 있는 경우
    else if (prevName.length && curTime + restTime < start) {
      answer.push(prevName);
      curTime = curTime + restTime;
      while (curTime < start && stack.length) {
        let [sName, sTime] = stack.pop();
        if (curTime + sTime <= start) {
          answer.push(sName);
          curTime = curTime + sTime;
        } else {
          sTime = sTime - (start - curTime);
          stack.push([sName, sTime]);
          break;
        }
      }
    }
    curTime = start;
    restTime = playtime;
    prevName = name;
  }
  console.log(answer);
  if (prevName.length) answer.push(prevName);
  curTime = curTime + restTime;
  while (stack.length) {
    let [sName, sTime] = stack.pop();
    answer.push(sName);
    curTime = curTime + sTime;
  }

  return answer;
}

// 꽤 난이도 있는 문제다. 실수를 좀 많이해서 너무 아쉽다.
// 첫째로 새로운 과제를 시작하기에 여유시간이 있는 경우 스택에서 할 수 있는 과제를 가능한 모두 해야한다. 처음에 반복문을 안쓰고 스택 원소 하나만 처리한게 첫번째 실수
// 둘째로 예외처리인데 이전에는 if(prevName.length) 없이 answer에 prevName을 집어넣었다. 이거는 굉장히 위험한 코드다. prevName이 뭔줄알고 예외처리없이 넣냐
// 셋째로 숫자가 문자열 타입이면 미리 숫자 타입으로 좀 바꾸고 해라 나중에 고치지 말고
// 구현에서 아쉬운건 굳이 왜 curTime이랑 prevName을 첫번째 원소로 초기화안하고 반복문을 돌렸는지.. ㅜㅜ
