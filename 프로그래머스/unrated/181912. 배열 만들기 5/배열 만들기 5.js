function solution(intStrs, k, s, l) {
    const answer = intStrs.map(v => v.slice(s, s+l)).map(v => +v).filter(v => v > k);
    return answer;
}