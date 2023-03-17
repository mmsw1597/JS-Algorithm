function solution(fees, records) {
  let answer = [];
  const [basic, basicFee, unit, unitFee] = fees;
  const map = {};
  const res = new Map();
  const mTime = {};
  const mNumber = {};

  for (let x of records) {
    const [time, number, type] = x.split(" ");

    if (type === "IN") {
      mNumber[number] = true;
      map[number] = time;
    } else {
      const start = map[number];
      const end = time;

      const s = start.split(":"); //start.split(":").reduce((acc, v, i) =>{if(i === 0 ) ....}) 한줄로 작성해서 코드 길이를 줄일수도 있다.
      const e = end.split(":");

      const sTime = +s[0] * 60 + +s[1];
      const eTime = +e[0] * 60 + +e[1];
      const total = eTime - sTime;

      if (mTime[number]) mTime[number] += total;
      else mTime[number] = total;
      delete map[number];
    }
  }
  for (let number of Object.keys(map)) {
    // 코드 중복.. 함수로 만들걸 이래서 구상이 중요
    // 빨리푸느라 대충 작성함
    const end = "23:59";
    const start = map[number];

    const s = start.split(":");
    const e = end.split(":");

    const sTime = +s[0] * 60 + +s[1];
    const eTime = +e[0] * 60 + +e[1];
    const total = eTime - sTime;

    if (mTime[number]) mTime[number] += total;
    else mTime[number] = total;
  }

  console.log(mTime);
  //mNumber 필요없음 mTime으로도 가능함
  for (let number of Object.keys(mNumber)) {
    const total = mTime[number]; //keys 말고 entries로 받았으면 이것도 필요없음
    if (total <= basic) {
      if (res.has(number)) res.set(number, res.get(number) + basicFee);
      else res.set(number, basicFee);
    } else {
      const cal = Math.ceil((total - basic) / unit) * unitFee;
      if (res.has(number)) res.set(number, res.get(number) + basicFee + cal);
      else res.set(number, basicFee + cal);
    }
  }
  const sorted = [...res].sort((a, b) => {
    return +a[0] - +b[0];
  });
  console.log(sorted);
  answer = sorted.map((v) => v[1]);
  return answer;
}

// 문제를 잘 읽어야함
// 누적 시간임에 유의
// 첫 구상에서 시간을 많이써야 오히려 빨리 푼다.
// 해시를 객체를 써서 구현할때 나중에 배열로 바꿀 필요가 있다면 Object.entries(객체이름)을 쓰면된다!
// 여러모로 아쉽다.
