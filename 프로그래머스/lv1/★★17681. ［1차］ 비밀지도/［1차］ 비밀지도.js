function solution(n, arr1, arr2) {
  let answer = [];
  let map1 = [];
  let map2 = [];

  function bin(num) {
    let str = [];
    while (num) {
      if (num % 2) str.push("#");
      else str.push(" ");
      num = Math.floor(num / 2);
    }
    for (let i = str.length; i < n; i++) {
      str.push(" ");
    }
    return str.reverse().join("");
  }

  for (let x of arr1) {
    map1.push(bin(x));
  }

  for (let x of arr2) {
    map2.push(bin(x));
  }

  console.log(map1);

  for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = 0; j < n; j++) {
      if (map1[i][j] === "#" || map2[i][j] === "#") str += "#";
      else str += " ";
    }
    answer.push(str);
  }

  return answer;
}

//다시 풀때 개선해서 풀 것
//조금 더 빨리 풀어 보자
