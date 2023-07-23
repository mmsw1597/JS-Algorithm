// 신고 횟수 제한 X
// 한 유저 여러번 신고해봤자 신고 횟수는 1회
// k번 이상 신고되면 정지, 신고자에게 정지 사실 메일 발송
// 정지자는 모든 신고 내용을 취합 -> 정지 메일 발송

function solution(id_list, report, k) {
    report = report.map(v => v.split(" "));
    const answer = Array.from({length: id_list.length}, () => 0);
    const attackerMemory = {}
    const indexMemory = {}
    
    id_list.forEach((name, index) => {
        attackerMemory[name] = new Set();
        indexMemory[name] = index;
    })
    
    for(const [attacker, receiver] of report) {
        attackerMemory[receiver].add(attacker);
    }
    
    // 지금 신고자의 인덱스를 모르는 상태라 난관
    id_list.forEach((name, index) => {
        const length = attackerMemory[name].size;
        if (length >= k) {
            [...attackerMemory[name]].forEach(attacker => {
                const attackerIndex = indexMemory[attacker];
                answer[attackerIndex]++;
            })
        }
    })
    
    return answer;
}