function solution(n) {
    var answer = [];
    let odd = n%2 === 0 ? n-1 : n 
    for (i = odd; i>0;){
        answer.push(i);
        i = i-2;
    }
    
    answer.sort((a,b) => a-b);
    
    return answer;
}