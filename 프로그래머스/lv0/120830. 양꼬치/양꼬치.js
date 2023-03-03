function solution(n, k) {
    var answer = 0;
    let count = Math.floor(n/10);
    (count >= 1) ? answer = n*12000 + (k-count)*2000 : answer = n*12000 + k*2000
    return answer;
}