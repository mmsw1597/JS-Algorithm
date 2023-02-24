function solution(new_id) {
  let answer = new_id
    .toLowerCase()
    .replace(/[^\w-.]/g, "")
    .replace(/\.+/g, ".")
    .replace(/^\.|\.$/, "")
    .replace(/^$/, "a")
    .slice(0, 15)
    .replace(/\.$/, "");

  const len = answer.length;

  if (len <= 2) {
    while (answer.length !== 3) answer += answer[len - 1];
  }

  return answer;
}

//정규표현식
//어느정도 암기는 하고 있어야 할듯
