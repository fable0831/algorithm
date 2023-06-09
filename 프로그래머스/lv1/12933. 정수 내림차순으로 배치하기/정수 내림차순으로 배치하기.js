function solution(n) {
    var answer = 0;
    answer = parseInt([...(n+"")].sort().reverse().join(""));
    return answer;
}