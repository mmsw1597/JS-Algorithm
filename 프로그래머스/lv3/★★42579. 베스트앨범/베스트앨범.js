// 1 속한 노래가 많이 재생된 장르 순
// 2 장르 내에서 많이 재생된 순
// 3 재생 수가 같다면 고유 번호가 낮은 노래 순

function solution(genres, plays) {
  let answer = [];
  const G = {}; // 장르 별 속한 노래를 내림차 순으로 정렬한 배열을 값으로 가짐
  const gCount = {}; // 장르 내에서 속한 노래 개수

  // 장르별 노래 개수 초기화
  // 장르별 노래 목록을 나타내는 배열 초기화
  for (let i = 0; i < genres.length; i += 1) {
    if (G[genres[i]]) {
      G[genres[i]].push(i);
      gCount[genres[i]] += plays[i];
    } else {
      G[genres[i]] = [i];
      gCount[genres[i]] = plays[i];
    }
  }

  // 각 장르마다 배열을 2개씩 잘라서 내림차 순으로 정렬
  // 만약 재생 수가 같다면 노래 번호 기준 오름차 순으로 정렬
  for (let [k, v] of Object.entries(G)) {
    G[k] = v
      .sort((a, b) => {
        if (plays[b] === plays[a]) return a - b;
        else return plays[b] - plays[a];
      })
      .slice(0, 2);
  }

  // 장르 별 노래 개수가 많은 순서로 정렬
  const sorted = Object.entries(G).sort((a, b) => {
    const [aName, aV] = a;
    const [bName, bV] = b;

    return gCount[bName] - gCount[aName];
  });

  // 정답에 담아주면 끝!
  for (let [name, v] of sorted) {
    for (let i of v) {
      answer.push(i);
    }
  }

  return answer;
}

// 복잡하고 해야할 것이 많다.
// 해시 + 정렬을 잘 다루면 무리없이 풀린다.
// 레벨 3 치고는 무난한 난이도인 것같다.
