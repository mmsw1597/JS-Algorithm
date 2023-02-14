function solution(number, limit, power) {
  let answer = 0;

  for (let n = 1; n <= number; n++) {
    let count = 0;

    for (let j = 1; j * j <= n; j++) {
      if (j * j === n) count++;
      else if (n % j === 0) count += 2;
    }

    if (count > limit) answer += power;
    else answer += count;
  }
  return answer;
}

//약수 개수 구하기 문제
//위 풀이는 빠른방법으로 다른 사람 코드를 참고함
//j의 제곱이 n보다 작을때 까지만 도는데 j의 약수들을 오름차순으로 나열했다고 가정하자.
//그 중 가운데를 n의 제곱근이라고 할 수 있다.
//1번째부터 5번째까지 있다고 해보면 1번째 * 5번째, 2번째 *4번째, 3번째 * 3번째일 것이다. 짝이 없는 경우는 반드시 자기 자신과의 곱일 수 밖에 없다.
//따라서 제곱근인 경우는 count를 1증가, 아닌 경우는 count를 2증가. 제곱근까지만 탐색하고 이후는 중복이므로 탐색하지 않는것.
