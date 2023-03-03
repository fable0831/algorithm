function solution(numbers, num1, num2) {
    var answer = [];
    for(let i = num1; i<=num2; i++){
        answer.push(numbers[i])
    }
    return answer;
}
// splice를 쓰는 쉬운 방법
// var num = num2 - num1 +1 ;
// answer = numbers.splice(num1, num);