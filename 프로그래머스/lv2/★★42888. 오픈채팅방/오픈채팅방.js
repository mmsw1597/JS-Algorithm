function solution(record) {
  let answer = [];
  const map = {};
  const memory = {};

  function change(indexes, name, oldName) {
    for (let index of indexes) {
      answer[index] = answer[index].replace(oldName, name);
    }
  }

  for (let r of record) {
    let [type, id, name] = r.split(" ");
    if (type === "Enter") {
      if (map[id]) {
        if (memory[id] !== name) {
          change(map[id], name, memory[id]);
          memory[id] = name;
        }
      } else {
        map[id] = [];
        memory[id] = name;
      }
      map[id].push(answer.length);
      answer.push(`${name}님이 들어왔습니다.`);
    } else if (type === "Leave") {
      map[id].push(answer.length);
      answer.push(`${memory[id]}님이 나갔습니다.`);
    } else if (type === "Change") {
      change(map[id], name, memory[id]);
      memory[id] = name;
    }
  }

  return answer;
}

// 문자열 구현
