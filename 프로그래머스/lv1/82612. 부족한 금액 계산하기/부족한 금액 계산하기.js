function solution(price, money, count) {
    const prices = Array.from({ length: count }, (_, i) => (i + 1) * price)
    const result = money - prices.reduce((acc, v) => acc + v, 0)
    return result >= 0 ? 0 : Math.abs(result);
}