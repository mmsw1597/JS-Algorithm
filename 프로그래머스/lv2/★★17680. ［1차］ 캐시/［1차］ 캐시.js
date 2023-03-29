function solution(cacheSize, cities) {
  let answer = 0;
  let stack = [];
  if (cacheSize === 0) return cities.length * 5;

  for (let x of cities) {
    x = x.toLowerCase();
    let target = null;
    let save = [];

    for (let i = 0; i < stack.length; i++) {
      if (stack[i] === x) target = stack[i];
      else save.push(stack[i]);
    }

    if (target) {
      stack = save;
      stack.push(target);
      answer++;
    } else {
      if (stack.length < cacheSize) stack.push(x);
      else {
        stack.shift();
        stack.push(x);
      }
      answer += 5;
    }
  }

  return answer;
}

// LRU 구현하기
// 순서도를 그리자. 없으니까 너무 헷갈렸다.
// 캐시 사이즈가 0인 경우 비정상적인 행동을 한다고 함.
