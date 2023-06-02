function solution(n, m) {
    let nlist = [];
    let mlist = [];
    
    //n의 약수
    for(let i=1; i<=n; i++){
        n % i === 0 ? nlist.push(i) : nlist;
    }
    
    //m의 약수
    for(let j=1; j<=m; j++){
        m % j === 0 ? mlist.push(j) : mlist;
    }
    
    //n의 약수와 m의 약수 교집합 중 가장 큰 수
    let max = mlist.filter(x => nlist.includes(x)).reverse()[0];
    
    return [max, n*m / max];    
}