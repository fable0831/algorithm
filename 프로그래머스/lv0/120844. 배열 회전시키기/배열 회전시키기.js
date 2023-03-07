function solution(numbers, direction) {
    var answer = [];
    if(direction === "left") {
     answer = numbers.splice(1,numbers.length -1);
    answer.push(numbers[0]);
    } else if(direction === "right"){
        answer = numbers.splice(0, numbers.length -1);
        answer.unshift(numbers[numbers.length -1]);
    }
    return answer;
}