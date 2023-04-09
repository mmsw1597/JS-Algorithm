// 일정 이상의 알고력, 코딩력 필요
// 문제 마다 올라가는 알고력, 코딩력 존재
// 문제 하나당 요구 시간 필요, 같은 문제 여러번 가능
// 주어진 문제로 알고력과 코딩력을 얻는 최단 시간
// 모든 문제를 풀도록 해야함
    
// 풀 수 있는 문제가 하나도 없으면 공부하는 거는 확정
// 소요 시간과 얻는 능력의 합이 같으면 의미없음 , 소요시간이 더 크면 안푸는게 이득
//

function solution(alp, cop, problems) {
    let answer = 0;
    let maxAlp = 0;
    let maxCop = 0;
    
    for(let [alp_req, cop_req, alp_rwd, cop_rwd, cost] of problems){
        if(maxAlp < alp_req) maxAlp = alp_req;
        if(maxCop < cop_req) maxCop = cop_req;
    }
    
    function min(a, b){
        return a > b ? b : a;
    }
    
    alp = min(alp, maxAlp);
    cop = min(cop, maxCop);

    const map = Array.from(Array(maxAlp + 1), () => Array(maxCop + 1).fill(Infinity));
    
    map[alp][cop] = 0;
    
    for(let i = alp; i<=maxAlp; i += 1){
        for(let j = cop; j<=maxCop; j += 1){
            if(i + 1 <= maxAlp) map[i+1][j] = map[i+1][j] > map[i][j] + 1 ? map[i][j] + 1 : map[i+1][j];
            if(j + 1 <= maxCop) map[i][j + 1] = map[i][j + 1] > map[i][j] + 1 ? map[i][j] + 1 : map[i][j + 1];
            for(let [alp_req, cop_req, alp_rwd, cop_rwd, cost] of problems){
                if(alp_req <= i && cop_req <= j){
                    let resA = i + alp_rwd > maxAlp ? maxAlp : i + alp_rwd;
                    let resC = j + cop_rwd > maxCop ? maxCop : j + cop_rwd;
                    map[resA][resC] = min(map[resA][resC], map[i][j] + cost);
                }
            }
        }
    }
    
    return map[maxAlp][maxCop];
}