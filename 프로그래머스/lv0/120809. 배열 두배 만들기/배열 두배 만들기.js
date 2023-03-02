function solution(numbers) {
    var answer = [];
    numbers.map((data) => (
        answer.push(parseInt(data*2))
        ));
    return answer;
}