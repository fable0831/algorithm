function solution(d, budget) {
    var answer = 0;
    let sum = 0;
    
    d.sort((a,b) => a-b);
    
    for(let i = 0; i<d.length; i++){
        if(budget < sum +d[i]) break;
        sum +=d[i];
        answer++;
    } 
    
    return answer;
}