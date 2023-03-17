function solution(num, k) {
    var answer = 0;
    num.toString().indexOf(k) === -1 ? answer = -1 : answer += num.toString().indexOf(k) +1
    
    return answer;
}