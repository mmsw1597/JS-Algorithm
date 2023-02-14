function solution(s, skip, index) {
  let answer = s;
  let arr = [];
  let arr1 = [];

  // for(let i = 97; i<=122; i++){
  //     console.log(String.fromCharCode(i));
  // }

  for (let x of s) {
    arr.push(x.charCodeAt());
  }
  for (let x of arr) {
    let jump = 0;
    let tmp = x;
    while (jump !== index) {
      //순서중요함
      //s에 있는 문자열이 skip에 있는 케이스는 주지 않는다고 문제에 적힘
      //슬슬 암산으로는 못푸는 문제가 나옴. 펜을 꺼내자
      tmp++;
      if (tmp > 122) tmp = (tmp % 123) + 97;
      if (!skip.includes(String.fromCharCode(tmp))) jump++;
    }
    arr1.push(String.fromCharCode(tmp));
  }

  answer = arr1.join("");

  return answer;
}

//풀고나서 보니 왜 오래걸린지 모르겠음
//처음에 index만큼 반복문 도는걸로 하고 skip해야되면 i를 감소시켰었는데 이런 코드는 오히려 더 문제풀기 헷갈리게 만드는거 같음
