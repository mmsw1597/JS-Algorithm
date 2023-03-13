function solution(cards) {
  let answer = 0;
  let arr = cards.slice();
  function box(idx, sign) {
    let cnt = 0;
    let ret = 0;
    while (cnt !== arr.length) {
      if (arr[idx - 1] > 0) {
        const open = arr[idx - 1];
        arr[idx - 1] = sign;
        cnt++;
        idx = open;
      } else {
        ret = cnt;
        break;
      }
    }

    return ret;
  }
  let sig = -1;
  const cnt = [];

  for (let i = 1; i <= cards.length; i++) {
    if (arr[i - 1] > 0) {
      cnt.push(box(i, sig));
      sig--;
    }
  }
  if (cnt.length >= 2) {
    cnt.sort((a, b) => a - b);
    answer = cnt.pop() * cnt.pop();
  } else {
    answer = 0;
  }

  return answer;
}

// 인덱스에 약한 나한테 좋은 문제
