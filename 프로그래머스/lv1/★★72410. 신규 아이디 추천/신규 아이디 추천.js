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

// 수정
/*
function solution(new_id) {
    let answer = new_id.toLowerCase()
    .replace(/[^a-z0-9\.\-_]/g, "")
    .replace(/\.{2,}/g, ".")
    .replace(/^\.|\.$/g,"");
    
    if(answer.length === 0) answer = "a";
    if(answer.length >= 16) answer = answer.slice(0, 15).replace(/\.$/, "");
    while(answer.length <= 2) answer += answer[answer.length - 1]; 
    
    return answer;
}
*/
