function solution(numbers) {
    let result = new Set();
    
    const DFS = (idx, N, sum) => {
        if(N === 2){
            result.add(sum)
            return;
        }
        
        for(let i = idx; i<numbers.length; i+=1){
            DFS(i + 1, N + 1, sum + numbers[i]);
        }
    }
    DFS(0, 0, 0);
    return [...result].sort((a,b) => a-b);
}

// 조합 구하기
// DFS로 구현할때 자주 실수하는게 있는데 위 코드에서 재귀 호출할때 두번째 인자를 index+1이 아니라 반복문의 i+1로 해야함
// ---------수정----------
// 두 수의 합을 더할때 각 원소를 tmp 배열에 담아서 합을 계산했었는데 그럴 필요 없이 새로운 매개변수 sum을 추가하여 시간단축
