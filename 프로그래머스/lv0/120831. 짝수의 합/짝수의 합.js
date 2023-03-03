function solution(n) {
    var answer = 0;
    let long = n%2 === 0 ? n/2 : (n-1)/2
    for(let i =0; i<long; i++){
      (n%2 === 0) ? answer = answer + n - 2*i : answer = answer + n -1 - 2*i
    }
    return answer;
}