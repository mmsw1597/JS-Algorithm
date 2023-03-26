function solution(numbers) {
  let answer = "";
  numbers = numbers.map((v) => v + "");
  numbers.sort((a, b) => {
    let aFirst = a + b;
    let bFirst = b + a;

    return bFirst - aFirst;
  });
  console.log(numbers);

  for (let s of numbers) {
    answer += s;
  }
  if (!answer.match(/[1-9]/g)) answer = "0";
  return answer;
}

// 쉽게 생각해보자
