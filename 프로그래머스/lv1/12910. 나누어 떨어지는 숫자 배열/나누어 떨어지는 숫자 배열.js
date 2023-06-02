function solution(arr, divisor) {
    var answer = [];
    arr.find((item) => item % divisor === 0) 
    ? arr.filter((item) => item % divisor === 0 ? answer.push(item) : answer)
    : answer.push(-1)
    
    answer.sort((a,b) => a-b);
    return answer;
}