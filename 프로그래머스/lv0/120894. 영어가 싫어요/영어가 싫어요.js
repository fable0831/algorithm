function solution(numbers) {
    var answer = 0;
    let num = [
        "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"
    ]
    for(let i = 0; i<10; i++){
        numbers.includes(num[i]) ? numbers = numbers.replace(new RegExp(num[i], "g"), i) : numbers
    }
    answer = Number(numbers)
    return answer;
}