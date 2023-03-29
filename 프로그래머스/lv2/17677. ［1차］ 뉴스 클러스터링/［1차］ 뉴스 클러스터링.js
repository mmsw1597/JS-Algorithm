function solution(str1, str2) {
    let answer = 0;
    let arrA = [];
    let arrB = [];
    let tmp = "";
    
    for(let i = 0; i<str1.length - 1; i++){
        arrA.push((str1[i] + str1[i+1]).toLowerCase());
    }
    
    
    for(let i = 0; i<str2.length - 1; i++){
        arrB.push((str2[i] + str2[i+1]).toLowerCase());
    }
    arrA = arrA.filter((v) => {
        if(v.match(/[^a-z]/g))
            return false;
        else
            return true;
    })
    
    arrB = arrB.filter((v) => {
        if(v.match(/[^a-z]/g))
            return false;
        else
            return true;
    })
    
    let mapA = {};
    let mapB = {};
    let common = 0;
    let all = 0;
    const set = new Set();
    
    for(let x of arrA){
        if(mapA[x]) mapA[x]++;
        else mapA[x] = 1;
        set.add(x);
    }
    
    for(let x of arrB){
        if(mapB[x]) mapB[x]++;
        else mapB[x] = 1;
        set.add(x);
    }
    
    for(let key of set){
        if(mapA[key] && mapB[key]){
            common += Math.min(mapA[key], mapB[key]);
            all += Math.max(mapA[key], mapB[key]);
        }else if(mapA[key]){
            all += mapA[key];
        }else if(mapB[key]){
            all += mapB[key];
        }
    }
    
    let J = 1;
    if(!common && !all) J = 65536;
    else J = Math.floor(((common / all) * 65536));
    
    return J;
}