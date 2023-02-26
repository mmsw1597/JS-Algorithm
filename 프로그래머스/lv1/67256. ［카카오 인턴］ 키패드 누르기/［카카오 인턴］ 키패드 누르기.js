function solution(numbers, hand) {
    let answer = '';
    const key = [[1, 2, 3], [4, 5, 6], [7, 8, 9], ["*", 0 , "#"]];
    const k = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    let left = [3, 0];
    let right = [3, 2];
    hand = (hand === "right"? "R" : "L");
     
    function BFS(x, y, target){
        const queue = [];
        queue.push([0, y, x]);
        
        while(queue.length){
            let v = queue.shift();
            let dis = v[0]
            let vy = v[1];
            let vx = v[2];
            if(key[vy][vx] === target) {
                return [dis, vy, vx];
            }
            for(let d of k){
                let dy = d[0] + vy;
                let dx = d[1] + vx;
                
                if(dy >= 0 && dy < 4 && dx >= 0 && dx < 3){
                    queue.push([dis+1, dy, dx]);
                }
            }
        }
    }
    
    for(let n of numbers){
        if(n === 1 || n === 4 || n === 7){
            let [dis, y, x] = BFS(left[1], left[0], n);
            left = [y, x];
            answer += "L";
        }
        
        else if(n === 3 || n === 6 || n === 9){
            let [dis, y, x] = BFS(right[1], right[0], n);
            right = [y, x];
            answer += "R";
        }
        
        else{
            let [l, ly, lx] = BFS(left[1], left[0], n);
            let [r, ry, rx] = BFS(right[1], right[0], n);
            if(l===r){
                if(hand === "R"){
                    right = [ry, rx];
                }
                else{
                    left = [ly, lx];
                }
                answer += hand;
            }else if(r > l){
                answer += "L";
                left = [ly, lx];
            }else{
                answer += "R";
                right = [ry, rx];
            }
        }
    }
    
    return answer;
}