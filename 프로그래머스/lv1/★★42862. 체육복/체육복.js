function solution(n, lost, reserve) {
  let answer = n - lost.length;
  let except = [];

  lost.forEach((v, i) => {
    const same = reserve.findIndex((r) => r === v);
    if (same !== -1) {
      answer++;
      reserve.splice(same, 1);
      except.push(v);
      return;
    }
  });

  lost.sort((a, b) => a - b);
  reserve.sort((a, b) => a - b);

  lost.forEach((v, i) => {
    if (except.includes(v)) return;
    const front = reserve.findIndex((r) => v - 1 === r);
    const back = reserve.findIndex((r) => v + 1 === r);

    if (front !== -1) {
      reserve.splice(front, 1);
      answer++;
    } else if (back !== -1) {
      reserve.splice(back, 1);
      answer++;
    }
  });
  return answer;
}

//수많은 예외를 만났는데 생각하지 못한 거를 나열해보면
//1.학생 번호가 항상 정렬되어 있다는 가정이 없었음 (항상 앞번호를 우선으로 빌려야함 근데 솔직히 문제가 불친절한거)
//2.여벌이 있는 동시에 도난당한 학생을 '먼저' reserve, lost에서 제외해야함 그리고 나서 빌리기 시작
//좀 더 나은 방법은 해쉬를 사용하는것. 해쉬를 사용해서 학생이 갖고 있는 체육복 개수를 저장
//앞번호를 우선으로 해서 앞번호 또는 뒷번호가 체육복이 2개라면 빌린다.
//체육복 개수가 1이상인 학생을 카운트한게 답
