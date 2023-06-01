function solution(x, n) {
    var answer = [];
    let sum = 0;
    for(let i= 1; i<=n; i++){
        sum = x*i;
        answer.push(sum);
    }
    return answer;
}