// 1 속한 노래가 많이 재생된 장르 순
// 2 장르 내에서 많이 재생된 순
// 3 재생 수가 같다면 고유 번호가 낮은 노래 순

function solution(genres, plays) {
    let answer = [];
    const G = {}; // 장르 별 속한 노래를 내림차 순으로 정렬한 배열을 값으로 가짐
    const gCount = {}; // 장르 내에서 속한 노래 개수
     
    for(let i = 0; i<genres.length; i+=1){
        if(G[genres[i]]) {
            G[genres[i]].push(i);
            gCount[genres[i]] += plays[i];
        }
        else {
            G[genres[i]] = [i];
            gCount[genres[i]] = plays[i];
        }
    }
    
    for(let [k, v] of Object.entries(G)){
        G[k] = v.sort((a, b) => {
            if(plays[b] === plays[a]) return a-b;
            else return plays[b] - plays[a];
        }).slice(0, 2);
    }
    
    const sorted = Object.entries(G).sort((a, b) => {
        const [aName, aV] = a;
        const [bName, bV] = b;
        
        return gCount[bName] - gCount[aName];
    })
    
    for(let [name, v] of sorted){
        for(let i of v){
            answer.push(i);
        }
    }
    
    return answer;
}