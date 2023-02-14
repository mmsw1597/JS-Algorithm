function solution(id_list, report, k) {
  let answer = Array.from({ length: id_list.length }, () => 0);
  let id = {};
  let count = {};
  let ban = [];

  for (let x of id_list) {
    id[x] = [];
    count[x] = 0;
  }

  for (let r of report) {
    let str = r.split(" ");
    let atk = str[0];
    let def = str[1];

    if (!id[atk].includes(def)) {
      count[def]++;
      id[atk].push(def);
    }
  }

  for (let x of id_list) {
    if (count[x] >= k) {
      ban.push(x);
    }
  }

  for (let b of ban) {
    for (let i = 0; i < id_list.length; i++) {
      if (id[id_list[i]].includes(b)) {
        answer[i]++;
      }
    }
  }

  return answer;
}

//빨리 푸는데만 집중해서 코드는 알아보기 힘들거임
//해쉬를 극한으로 활용해야 하는 문제임
//변수 네이밍을 잘해야 나중에 안헷갈리는데 이거는 영어를 잘해야할듯

//아래는 모범답안
/*
function solution(id_list, report, k) {
    let reports = [...new Set(report)].map(a=>{return a.split(' ')});
    let counts = new Map();
    for (const bad of reports){
        counts.set(bad[1],counts.get(bad[1])+1||1)
    }
    let good = new Map();
    for(const report of reports){
        if(counts.get(report[1])>=k){
            good.set(report[0],good.get(report[0])+1||1)
        }
    }
    let answer = id_list.map(a=>good.get(a)||0)
    return answer;
}
*/
//undefined가 falsy임을 이용해서 || 연산을 쓴것에 주목
//중복제거는 Set을 활용 이거는 머리에 박아놔야함
//중복제거 방법과 데이터 가공을 눈여겨 봐야함 스프레드, map 함수 활용
//answer를 어떻게 id 순서랑 매치시키지? 라는 생각을 풀면서 했는데 기가막힌 방법으로 푸셨음
