function solution(sizes) {
  let W = 0;
  let H = 0;

  sizes.forEach((v, i) => {
    let [w, h] = v.sort((a, b) => b - a);
    W = Math.max(W, w);
    H = Math.max(H, h);
  });

  return W * H;
}

//오래 걸렸음
//어찌되었든간에 지갑의 한 모서리는 명함 중 길이가 가장 긴 모서리의 길이를 가져야함. (회전을 하든 뭘 하든간에..)
//방법알면 금방 푸는 문제라 별표치긴 애매하긴한데 그래도..
