function solution(s, n) {
  let answer = "";
  let low = "";
  let up = "";
  for (let i = "a".charCodeAt(); i <= "z".charCodeAt(); i++) {
    low += String.fromCharCode(i);
    up += String.fromCharCode(i - 32);
  }

  for (let x of s) {
    const code = x.charCodeAt();
    if (code >= "a".charCodeAt() && code <= "z".charCodeAt()) {
      answer += low[(low.indexOf(x) + n) % low.length];
    } else if (code >= "A".charCodeAt() && code <= "Z".charCodeAt()) {
      answer += up[(up.indexOf(x) + n) % up.length];
    } else {
      answer += " ";
    }
  }

  return answer;
}

//JS에서 아스키코드 다루기
//이게 제일 깔끔한듯함
