function solution(numer1, denom1, numer2, denom2) {
  let answer = [];
  let up = 0;
  let down = 0;

  numer1 *= denom2;
  numer2 *= denom1;
  up = numer1 + numer2;
  down = denom1 * denom2;
  let min = Math.min(up, down);

  for (i = 2; i <= Math.floor(min / 2); i++) {
    if (up % i === 0 && down % i === 0) {
      up /= i;
      down /= i;
      i--;
    }
  }

  answer.push(up);
  answer.push(down);

  return answer;
}

//좀더 간결한 풀이는 최대공약수 GCD를 구하는 함수를 만드는것
/*
function fnGCD(a, b){
    return (a%b)? fnGCD(b, a%b) : b;
}
*/
