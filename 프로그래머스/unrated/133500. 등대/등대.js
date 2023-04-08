function solution(n, lighthouse) {
    let answer = 0;
    // 한 뱃길의 양쪽 끝 등대 중 적어도 하나는 켜져있어야함
    // 가장 뱃길이 많은 등대를 끄는건 맞는거 같음
    const arr = Array.from({length : n + 1}, () => 0);
    const edge = Array.from({length : n + 1}, ()=>[]);
    let sum = 0;
    const map = {};
    for(let [s, e] of lighthouse){
        edge[s].push(e);
        edge[e].push(s);
        arr[s] += 1;
        arr[e] += 1;
        sum += 2;
    }
    
    function sub(idx){
        let parentList = edge[idx];
        let parent = null;
        for(let x of parentList){
            if(arr[x]){
                parent = x;
                break;
            }
        }
        let ret = arr[parent];
        arr[parent] = 0;       
        for(let x of edge[parent]){
            if(arr[x] > 0){
                arr[x] -= 1;
                ret += 1;
            }
        }  
        return ret;
    }
    
    function add(idx){
        let ret = 0;       
        for(let x of edge[idx]){
            arr[x] += 1;
            arr[idx] += 1;
            ret += 2;
        }     
        return ret;
    }
    
    
    while(sum){
        for(let i = 1; i<=n; i++){
            if(arr[i] === 1){
                sum -= sub(i);
                answer++;
                break;
            }
        }
    }
    
    return answer;
}