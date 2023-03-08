function solution(cap, n, deliveries, pickups) {
  let answer = 0;
  let store = cap;

  while (deliveries.length && !deliveries[deliveries.length - 1]) {
    deliveries.pop();
  }
  while (pickups.length && !pickups[pickups.length - 1]) {
    pickups.pop();
  }

  while (deliveries.length || pickups.length) {
    answer += Math.max(deliveries.length, pickups.length) * 2;
    store = cap;
    while (store && deliveries.length) {
      deliveries[deliveries.length - 1]--;
      store--;
      while (deliveries.length && deliveries[deliveries.length - 1] === 0)
        deliveries.pop();
    }
    store = 0;
    while (store !== cap && pickups.length) {
      pickups[pickups.length - 1]--;
      store++;
      while (pickups.length && pickups[pickups.length - 1] === 0) pickups.pop();
    }
  }

  return answer;
}

// 구현 + 그리디
