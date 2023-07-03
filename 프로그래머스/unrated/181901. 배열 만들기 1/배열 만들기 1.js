function solution(n, k) {
    const arr = Array.from({length : n}, (_, i) => i + 1);
    return arr.filter(v => v % k === 0);
}