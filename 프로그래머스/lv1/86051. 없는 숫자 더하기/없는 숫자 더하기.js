function solution(numbers) {
    var answer = 45;
    let num = 0;
    numbers.map((o) => num += o);
    return answer - num;
}